"use client";

import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import Menu from "./Menu";

const Header: FC = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 10) {
      return setIsSticky(true);
    }
    setIsSticky(false);
  }, []);

  useEffect(() => {
    // Setup basic state
    scrollHandler()

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`fixed flex justify-center w-full px-5  top-0 left-0 duration-150 ${
        isSticky ? "bg-white shadow-md py-2" : "py-5"
      } z-[5]`}
    >
      <div className="flex flex-1 max-w-[1125px] grid-flow-col justify-between items-center">
        <Image
          className="cursor-pointer hover:scale-90 duration-150"
          width={140}
          height={60}
          src={"/skill-2.png"}
          alt="logo"
        />
        <div>
          <svg
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
          <Menu isOpen={isOpen} closeHandler={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
