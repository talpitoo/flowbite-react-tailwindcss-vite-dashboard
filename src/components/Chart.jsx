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

/**
 * Chart component renders a line chart with additional statistics,
 * dropdowns for range selection, and action buttons.
 *
 * @component
 * @returns {JSX.Element} The rendered chart component.
 */
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
      {/* 
        NOTE: additional/custom/inline TailwindCSS classes
          - most of the markup is custom, e.g. <div>s and <span>s but the rest is Flowbite React
      */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <span>Clicks</span>
            {/* 
              NOTE: additional/custom/inline TailwindCSS classes
                - there is no such example of an icon triggering the tooltip but it's possible
            */}
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
        {/* 
          NOTE: additional/custom/inline TailwindCSS classes
            - for the outlined dropdown color="gray"...
            - and size="sm" are used
            - other than that it is a standard Flowbite React component
        */}
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
      {/* 
        NOTE: additional/custom/inline TailwindCSS classes
          - custom class .my-0 on the HR component because the parent already has gap set
      */}
      <HR className="my-0" />
      <div>
        {/* 
          NOTE: additional/custom/inline TailwindCSS classes
            - size="sm"...
            - and color="primary" are used
        */}
        <Button size="sm" color="primary">
          {/* 
            NOTE: additional/custom/inline TailwindCSS classes
              - the icons has neagtive vertical offset .my-px to avoid larger button height
              - this is documented in the README.md as well
          */}
          <HiDocumentText className="-my-px mr-2 size-4" />
          View full report
        </Button>
      </div>
    </>
  );
};

export default Chart;
