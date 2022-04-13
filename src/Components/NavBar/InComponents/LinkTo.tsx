import React from "react";
import {HashLink} from "react-router-hash-link";

interface LinkToProps {
    to: string;
    children: React.ReactNode;
}

export default function LinkTo({children, to}: LinkToProps) {
  return (
    <div>
      <HashLink smooth to={'#'+to} className={"text-white font-display hover:text-[#00c8ff]" +
        " transition-all" +
        " duration-150 hover:transition-all hover:duration-150"}>
        {children}
      </HashLink>
    </div>
  )
}