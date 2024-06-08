"use client";
import React from "react";

// import { useSearchParams } from "next/navigation";
import { Line } from "react-chartjs-2";
import { data } from "@/datao";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const DailyActivityTrends: React.FC = () => {
  // const searchParams = useSearchParams();
  // const dev = searchParams.get("dev");
  // console.log(dev);
  const rows = data.AuthorWorklog.rows;
  console.log(rows);
  const allDates = rows.flatMap((row) =>
    row.dayWiseActivity.map((day) => day.date)
  );
  const uniqueDates = [...new Set(allDates)];
  //   console.log(uniqueDates)
  Chart.register(CategoryScale);
  const activityLabels = data.AuthorWorklog.activityMeta.map(
    (meta) => meta.label
  );
  const datasets = activityLabels.map((label) => {
    return {
      label,
      data: uniqueDates.map((date) => {
        return data.AuthorWorklog.rows
          .flatMap((row) => {
            // console.log(row);
           return row.dayWiseActivity
              .filter((day) => day.date === date)
              .flatMap((day) =>
                day.items.children
                  .filter((item) => item.label === label)
                  .map((item) => parseInt(item.count))
              );
          })
          .reduce((a, b) => a + b, 0);
      }),
      backgroundColor:
        data.AuthorWorklog.activityMeta.find((meta) => meta.label === label)
          ?.fillColor || "rgba(0,0,0,0.1)",
      borderColor:
        data.AuthorWorklog.activityMeta.find((meta) => meta.label === label)
          ?.fillColor || "rgba(0,0,0,0.1)",
      fill: false,
    };
  });
  const chartData = {
    labels: uniqueDates,
    datasets,
  };
  return <Line data={chartData} />;
};

export default DailyActivityTrends;
