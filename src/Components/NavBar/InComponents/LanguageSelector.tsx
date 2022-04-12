import {Icon} from "@iconify/react";
import React from "react";

export default function LanguageSelector() {
  // TODO: Implement language selector hook with i18n
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    if (language.toLowerCase() === "en") {
      localStorage.setItem("lang", "en");
    } else {
      localStorage.setItem("lang", "es");
    }
  };

  return (
    <div className="absolute right-14 w-20">
      <Icon icon="ic:round-language" className="text-white absolute translate-y-0.5 w-5 h-5"/>
      <select onChange={handleSelect} id="select-language" className="cursor-pointer translate-x-6 bg-transparent focus:outline-none active:outline-none text-white">
        <option value="en" className="cursor-pointer text-black">En</option>
        <option value="es" className="cursor-pointer text-black">Es</option>
      </select>
    </div>
  )
}