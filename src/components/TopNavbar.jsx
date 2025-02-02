/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Flowbite } from "flowbite-react";
import { Button, Navbar, TextInput, DarkThemeToggle } from "flowbite-react";
import AdaptiveSidebar from "./AdaptiveSidebar";
import LogoBlack from "/logo-PrimeRevenue-Alt-Black.svg";
import LogoWhite from "/logo-PrimeRevenue-Alt-White.svg";
import { HiOutlineSearch } from "react-icons/hi";

export function TopNavbar() {
  // NOTE: this is for handling the sidebar expanded layout and html/body overflow
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
      <Navbar fluid className="fixed left-0 right-0 top-0 z-50">
        <Navbar.Brand href="https://flowbite-react.com" className="mx-3">
          <img src={LogoWhite} alt="PrimeRevenue" className="h-11" />
        </Navbar.Brand>
        <div className="flex space-x-2 lg:order-2">
          <DarkThemeToggle />
          {/* NOTE: there is an additional observer in the useEffect hook */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
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
          <Navbar.Link href="#">Marketplace</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>

          {/* NOTE: adaptive sidebar layout, mobile */}
          <AdaptiveSidebar mobile />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
