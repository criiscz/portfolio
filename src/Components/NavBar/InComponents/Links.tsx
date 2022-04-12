import React from "react";

export default function Links({children}:{children: React.ReactNode}) {
  return (
    <div className={"links right-56 absolute flex gap-5 font-display font-semibold"}>
      {children}
    </div>
  )
}