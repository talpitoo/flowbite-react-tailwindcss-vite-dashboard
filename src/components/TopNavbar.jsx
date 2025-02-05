/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Flowbite } from "flowbite-react";
import { Button, Navbar, TextInput, DarkThemeToggle } from "flowbite-react";
import AdaptiveSidebar from "./AdaptiveSidebar";
import LogoFlowbite from "/logo-flowbite.svg";
import { HiOutlineSearch } from "react-icons/hi";

/**
 * TopNavbar component renders a fixed top navigation bar with logo, 
 * a dark mode toggle, and a collapsible menu.
 * It has a nested `<AdaptiveSidebar mobile />` component for mobile layout.
 * It also observes the navbar collapse state to manage `.menu-expanded` class on `<html>`.
 *
 * @component
 * @returns {JSX.Element} The rendered top navigation bar.
 */
export function TopNavbar() {
  // NOTE: additional/custom/inline TailwindCSS classes
  //   - this is for handling the sidebar expanded layout and html/body overflow
  useEffect(() => {
    const collapseEl = document.querySelector(
      "[data-testid='flowbite-navbar-collapse']",
    );
    if (!collapseEl) return;

    const observer = new MutationObserver(() => {
      const isOpen = !collapseEl.classList.contains("hidden");
      document.documentElement.classList.toggle("menu-expanded", isOpen);
    });

    observer.observe(collapseEl, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 
        NOTE: additional/custom/inline TailwindCSS classes
          - the fixed positioning is custom, part of the global responsive layout
      */}
      <Navbar fluid className="fixed left-0 right-0 top-0 z-50">
        <Navbar.Brand href="https://flowbite-react.com" className="mx-3">
          <img src={LogoFlowbite} alt="MyCompany" className="h-11" />
          <span className="text-white ml-4">Flowbite React</span>
        </Navbar.Brand>
        <div className="flex space-x-2 lg:order-2">
          <DarkThemeToggle />
          {/* NOTE: there is an additional observer in the useEffect hook */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* 
            NOTE: additional/custom/inline TailwindCSS classes
              - the search form is custom
              - both the text input and the button have additional custom classes
          */}
          <form className="relative mb-4 flex items-center space-x-2 p-2.5 lg:order-1 lg:mx-8 lg:mb-0 lg:p-0">
            <TextInput
              id="search"
              type="search"
              sizing="sm"
              placeholder="Search"
              icon={HiOutlineSearch}
              color="inverse"
              className="grow"
            />
            <Button
              type="submit"
              color="primary"
              size="sm"
              className="w-9 dark:text-white"
            >
              <span className="sr-only">Search</span>
              <HiOutlineSearch className="-my-px size-4" />
            </Button>
          </form>
          <Navbar.Link href="#" active>
            Company
          </Navbar.Link>
          {/* <Navbar.Link href="#">Marketplace</Navbar.Link> */}
          <Navbar.Link href="#">Features</Navbar.Link>
          {/* <Navbar.Link href="#">Team</Navbar.Link> */}
          <Navbar.Link href="#">Contact</Navbar.Link>

          {/* 
            NOTE: additional/custom/inline TailwindCSS classes
              - adaptive sidebar layout, mobile
              - it is inserted/injected here as adaptive markup
          */}
          <AdaptiveSidebar mobile />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
