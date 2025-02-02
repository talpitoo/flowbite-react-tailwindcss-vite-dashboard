/* eslint-disable no-unused-vars */
import { Sidebar, Badge } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiDocument,
  HiUser,
  HiCog,
  HiDocumentReport,
  HiShoppingBag,
} from "react-icons/hi";

export function AdaptiveSidebar({ desktop, mobile }) {
  const sidebarClasses = [
    "min-h-screen lg:w-sidebar bg-sidebar-light dark:bg-sidebar-dark",
    desktop ? "hidden lg:fixed lg:left-0 lg:top-topnavbar lg:block" : "",
    mobile ? "lg:hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Sidebar as="aside" className={sidebarClasses}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiDocument} label="Manage Early Payments">
              <Sidebar.Item href="#">TODO</Sidebar.Item>
              <Sidebar.Item href="#">TODO</Sidebar.Item>
              <Sidebar.Item href="#">TODO</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiShoppingBag} label="View Invoices">
              <Sidebar.Item href="#">Unpaid Approved Invoices</Sidebar.Item>
              <Sidebar.Item href="#">Paid Approved Invoices</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiInbox} className="relative">
              View Payments Received
              <Badge className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full !bg-gray-700 group-hover:!bg-gray-500 !text-red-400 dark:border-0">1</Badge>
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiDocumentReport} label="Manage Reporting">
              <Sidebar.Item href="#">TODO</Sidebar.Item>
              <Sidebar.Item href="#">TODO</Sidebar.Item>
              <Sidebar.Item href="#">TODO</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiDocument}>
              Track Documents
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiCog}>
              Administration
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Onboarding
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default AdaptiveSidebar;
