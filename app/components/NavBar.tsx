import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between pl-2 bg-dark-layer-1 text-white z-10">
        <Link href="/" className="flex items-center justify-center h-10">
          <div className="text-lg font-bold">CodeJr</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
