import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="flex text-2xl text-white font-semibold md:ml-8">
          <Image
            src={"/images/logo.png"}
            width={45}
            height={100}
          />
          <span className="pl-2 pt-1">
            portfolio
          </span>
          <span className="pt-1 text-primary-400">
            .
          </span>
        </span>
        <p className="text-slate-600 pt-2">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
