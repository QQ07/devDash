// src/data.ts
export const data = {
    "data": {
        "AuthorWorklog": {
            "activityMeta": [
                { "label": "Code Commit", "fillColor": "rgba(75,192,192,0.6)" },
                { "label": "Pull Request Opened", "fillColor": "rgba(54,162,235,0.6)" },
                { "label": "Pull Request Merged", "fillColor": "rgba(255,206,86,0.6)" },
                { "label": "Pull Request Reviewed", "fillColor": "rgba(153,102,255,0.6)" },
                { "label": "Incident Alert Handled", "fillColor": "rgba(255,99,132,0.6)" }
            ],
            "rows": [
                {
                    "name": "Alice",
                    "dayWiseActivity": [
                        {
                            "date": "2023-06-01",
                            "items": {
                                "children": [
                                    { "label": "Code Commit", "count": "5" },
                                    { "label": "Pull Request Opened", "count": "2" },
                                    { "label": "Pull Request Merged", "count": "1" }
                                ]
                            }
                        },
                        {
                            "date": "2023-06-02",
                            "items": {
                                "children": [
                                    { "label": "Code Commit", "count": "3" },
                                    { "label": "Pull Request Reviewed", "count": "2" },
                                    { "label": "Incident Alert Handled", "count": "1" }
                                ]
                            }
                        },
                        {
                            "date": "2023-06-03",
                            "items": {
                                "children": [
                                    { "label": "Code Commit", "count": "7" },
                                    { "label": "Pull Request Merged", "count": "1" },
                                    { "label": "Incident Alert Handled", "count": "1" }
                                ]
                            }
                        }
                    ]
                },
                {
                    "name": "Bob",
                    "dayWiseActivity": [
                        {
                            "date": "2023-06-01",
                            "items": {
                                "children": [
                                    { "label": "Code Commit", "count": "4" },
                                    { "label": "Pull Request Reviewed", "count": "1" },
                                    { "label": "Incident Alert Handled", "count": "2" }
                                ]
                            }
                        },
                        {
                            "date": "2023-06-02",
                            "items": {
                                "children": [
                                    { "label": "Pull Request Opened", "count": "3" },
                                    { "label": "Pull Request Merged", "count": "1" },
                                    { "label": "Code Commit", "count": "2" }
                                ]
                            }
                        },
                        {
                            "date": "2023-06-03",
                            "items": {
                                "children": [
                                    { "label": "Code Commit", "count": "6" },
                                    { "label": "Pull Request Reviewed", "count": "2" },
                                    { "label": "Incident Alert Handled", "count": "1" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
};


// export const data = {

//         "AuthorWorklog": {
//             "activityMeta": [
//                 {
//                     "label": "PR Open",
//                     "fillColor": "#EF6B6B"
//                 },
//                 {
//                     "label": "PR Merged",
//                     "fillColor": "#61CDBB"
//                 },
//                 {
//                     "label": "Commits",
//                     "fillColor": "#FAC76E"
//                 },
//                 {
//                     "label": "PR Reviewed",
//                     "fillColor": "#C2528B"
//                 },
//                 {
//                     "label": "PR Comments",
//                     "fillColor": "#0396A6"
//                 },
//                 {
//                     "label": "Incident Alerts",
//                     "fillColor": "#5F50A9"
//                 },
//                 {
//                     "label": "Incidents Resolved",
//                     "fillColor": "#8F3519"
//                 }
//             ],
//             "rows": [
//                 {
//                     "name": "rishi@devdynamics.ai",
//                     "totalActivity": [
//                         {
//                             "name": "PR Open",
//                             "value": "1"
//                         },
//                         {
//                             "name": "PR Merged",
//                             "value": "1"
//                         },
//                         {
//                             "name": "Commits",
//                             "value": "49"
//                         },
//                         {
//                             "name": "PR Reviewed",
//                             "value": "19"
//                         },
//                         {
//                             "name": "PR Comments",
//                             "value": "4"
//                         },
//                         {
//                             "name": "Incident Alerts",
//                             "value": "0"
//                         },
//                         {
//                             "name": "Incidents Resolved",
//                             "value": "0"
//                         }
//                     ],
//                     "dayWiseActivity": [
//                         {
//                             "date": "2024-05-06",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "7",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-07",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "7",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "4",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-08",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "4",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-09",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "12",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-10",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-11",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "4",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-12",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "4",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-13",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "5",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "4",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-14",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-15",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-16",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-17",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-18",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-19",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         }
//                     ],
//                     "activeDays": {
//                         "days": 10,
//                         "isBurnOut": false,
//                         "insight": [""]
//                     }
//                 },
//                 {
//                     "name": "ritik@devdynamics.ai",
//                     "totalActivity": [
//                         {
//                             "name": "PR Open",
//                             "value": "9"
//                         },
//                         {
//                             "name": "PR Merged",
//                             "value": "6"
//                         },
//                         {
//                             "name": "Commits",
//                             "value": "22"
//                         },
//                         {
//                             "name": "PR Reviewed",
//                             "value": "0"
//                         },
//                         {
//                             "name": "PR Comments",
//                             "value": "0"
//                         },
//                         {
//                             "name": "Incident Alerts",
//                             "value": "0"
//                         },
//                         {
//                             "name": "Incidents Resolved",
//                             "value": "0"
//                         }
//                     ],
//                     "dayWiseActivity": [
//                         {
//                             "date": "2024-05-06",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "4",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-07",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-08",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "3",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "5",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-09",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-10",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "2",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "6",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-11",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-12",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-13",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-14",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-15",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-16",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-17",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-18",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-19",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         }
//                     ],
//                     "activeDays": {
//                         "days": 6,
//                         "isBurnOut": false,
//                         "insight": [""]
//                     }
//                 },
//                 {
//                     "name": "avijit@devdynamics.ai",
//                     "totalActivity": [
//                         {
//                             "name": "PR Open",
//                             "value": "3"
//                         },
//                         {
//                             "name": "PR Merged",
//                             "value": "5"
//                         },
//                         {
//                             "name": "Commits",
//                             "value": "18"
//                         },
//                         {
//                             "name": "PR Reviewed",
//                             "value": "0"
//                         },
//                         {
//                             "name": "PR Comments",
//                             "value": "1"
//                         },
//                         {
//                             "name": "Incident Alerts",
//                             "value": "0"
//                         },
//                         {
//                             "name": "Incidents Resolved",
//                             "value": "0"
//                         }
//                     ],
//                     "dayWiseActivity": [
//                         {
//                             "date": "2024-05-06",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-07",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-08",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-09",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "7",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-10",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-11",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-12",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-13",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-14",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "2",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "7",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-15",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-16",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-17",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-18",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-19",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         }
//                     ],
//                     "activeDays": {
//                         "days": 5,
//                         "isBurnOut": false,
//                         "insight": [""]
//                     }
//                 },
//                 {
//                     "name": "arvind.shelke@devdynamics.ai",
//                     "totalActivity": [
//                         {
//                             "name": "PR Open",
//                             "value": "2"
//                         },
//                         {
//                             "name": "PR Merged",
//                             "value": "1"
//                         },
//                         {
//                             "name": "Commits",
//                             "value": "10"
//                         },
//                         {
//                             "name": "PR Reviewed",
//                             "value": "0"
//                         },
//                         {
//                             "name": "PR Comments",
//                             "value": "0"
//                         },
//                         {
//                             "name": "Incident Alerts",
//                             "value": "0"
//                         },
//                         {
//                             "name": "Incidents Resolved",
//                             "value": "0"
//                         }
//                     ],
//                     "dayWiseActivity": [
//                         {
//                             "date": "2024-05-06",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-07",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-08",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-09",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "2",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-10",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "1",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-11",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-12",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-13",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-14",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "1",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "3",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-15",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-16",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-17",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-18",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         },
//                         {
//                             "date": "2024-05-19",
//                             "items": {
//                                 "children": [
//                                     {
//                                         "count": "0",
//                                         "label": "PR Open",
//                                         "fillColor": "#EF6B6B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Merged",
//                                         "fillColor": "#61CDBB"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Commits",
//                                         "fillColor": "#FAC76E"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Reviewed",
//                                         "fillColor": "#C2528B"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "PR Comments",
//                                         "fillColor": "#0396A6"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incident Alerts",
//                                         "fillColor": "#5F50A9"
//                                     },
//                                     {
//                                         "count": "0",
//                                         "label": "Incidents Resolved",
//                                         "fillColor": "#8F3519"
//                                     }
//                                 ]
//                             }
//                         }
//                     ],
//                     "activeDays": {
//                         "days": 7,
//                         "isBurnOut": false,
//                         "insight": [""]
//                     }
//                 }
//             ]
//         }
//     }
