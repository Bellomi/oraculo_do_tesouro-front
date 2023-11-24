"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LineChart = () => {
  return (
    <div className="line-chart-container mb-20">
      <div className="flex-1 overflow-autopt-36 padding padding-x">
        <h2 className="my-20 text-2xl font-bold">Cotação</h2>
        <Line
          data={{
            labels: [
              "24/11/2022",
              "14/12/2022",
              "11/01/2023",
              "15/02/2023",
              "23/03/2023",
              "16/05/2023",
              "06/07/2023",
              "26/08/2023",
              "18/10/2023",
              "21/11/2023",
            ],
            datasets: [
              {
                label: "lalala",
                data: [668, 672, 708, 709, 729, 754, 786, 796, 793, 813],
                borderColor: "green",
                borderWidth: 1,
                backgroundColor: "green",
                fill: "true",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
export default LineChart;
