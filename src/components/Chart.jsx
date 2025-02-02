/* eslint-disable no-unused-vars */
import { Button, Dropdown, HR, Tooltip as FlowbiteTooltip } from "flowbite-react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { HiDocumentText, HiInformationCircle } from "react-icons/hi";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

const Chart = () => {
  const [selectedRange, setSelectedRange] = useState("Last week");
  const data = {
    labels: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 30, 50, 80, 60, 90, 40],
        borderColor: "blue",
        backgroundColor: "transparent",
      },
      {
        label: "Dataset 2",
        data: [50, 40, 80, 60, 90, 40, 60],
        borderColor: "purple",
        backgroundColor: "transparent",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <span>Clicks</span>
            <FlowbiteTooltip content="Tooltip content: TODO">
              <HiInformationCircle className="ml-1 h-3 w-3" />
            </FlowbiteTooltip>
          </div>
          <p className="text-xl font-bold">234,5K</p>
        </div>
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <span>CPC</span>
            <FlowbiteTooltip content="Tooltip content: TODO">
              <HiInformationCircle className="ml-1 h-3 w-3" />
            </FlowbiteTooltip>
          </div>
          <p className="text-xl font-bold">$1.20</p>
        </div>
        <Dropdown label={selectedRange} color="gray" size="sm">
          <Dropdown.Item onClick={() => setSelectedRange("Last week")}>
            Last week
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedRange("This month")}>
            This month
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
      <HR className="my-0" />
      <div>
        <Button size="sm" color="primary">
          <HiDocumentText className="-my-px mr-2 size-4" />
          View full report
        </Button>
      </div>
    </>
  );
};

export default Chart;
