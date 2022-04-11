import React from "react";
import {Link} from "react-router-dom";

export default function LinkTo({
                                 children,
                                 to,
                                 ...props
                               }: { children: React.ReactNode, to: string }) {
  return (
    <div>
      <Link to={to} className={"text-white font-display"}>
        {children}
      </Link>
    </div>
  )
}