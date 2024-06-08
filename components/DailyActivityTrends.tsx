// src/components/DailyActivityTrends.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import { data } from "@/data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
const DailyActivityTrends: React.FC = () => {
  const rows = data.data.AuthorWorklog.rows;
  const allDates = rows.flatMap((row) =>
    row.dayWiseActivity.map((day) => day.date)
  );
  const uniqueDates = [...new Set(allDates)];

  Chart.register(CategoryScale);
  const activityLabels = data.data.AuthorWorklog.activityMeta.map(
    (meta) => meta.label
  );

  const datasets = activityLabels.map((label) => {
    return {
      label,
      data: uniqueDates.map((date) => {
        return data.data.AuthorWorklog.rows
          .flatMap((row) =>
            row.dayWiseActivity
              .filter((day) => day.date === date)
              .flatMap((day) =>
                day.items.children
                  .filter((item) => item.label === label)
                  .map((item) => parseInt(item.count))
              )
          )
          .reduce((a, b) => a + b, 0);
      }),
      backgroundColor:
        data.data.AuthorWorklog.activityMeta.find(
          (meta) => meta.label === label
        )?.fillColor || "rgba(0,0,0,0.1)",
      borderColor:
        data.data.AuthorWorklog.activityMeta.find(
          (meta) => meta.label === label
        )?.fillColor || "rgba(0,0,0,0.1)",
      fill: false,
    };
  });

  const chartData = {
    labels: uniqueDates,
    datasets,
  };
  console.log(chartData)
  return <Line data={chartData} />;
};

export default DailyActivityTrends;
