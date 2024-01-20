import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between pl-2 bg-dark-layer-2 w-full text-white z-10 fixed">
        <Link href="/" className="flex items-center justify-center h-14">
          <div className="text-xl font-extrabold">CodeJr</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
