import React from "react";
import {Link} from "react-router-dom";

export default function LinkTo({
                                 children,
                                 to,
                                 ...props
                               }: { children: React.ReactNode, to: string }) {
  return (
    <div>
      <Link to={to} className={"text-white font-display hover:text-[#00c8ff] transition-all" +
        " duration-150 hover:transition-all hover:duration-150"}>
        {children}
      </Link>
    </div>
  )
}