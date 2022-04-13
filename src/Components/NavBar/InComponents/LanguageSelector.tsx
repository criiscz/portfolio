import {Icon} from "@iconify/react";
import React from "react";

import {useState} from 'react'
import {Listbox} from '@headlessui/react'

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

  const langs = [
    {id: 1, name: 'Spanish', unavailable: false},
    {id: 2, name: 'English', unavailable: false},
  ]
  return (

    <div className="absolute right-14 w-20">
      <Icon icon="ic:round-language" className="text-white absolute translate-y-0.5 w-5 h-5"/>
      <select onChange={handleSelect} id="select-language"
              className="cursor-pointer translate-x-6 bg-transparent focus:outline-none active:outline-none text-white">
        {
          langs.map(lang => {
            return (
              <option value={lang.name} className="cursor-pointer text-black">{lang.name}</option>
            )
          })
        }
      </select>
    </div>
  )
}



