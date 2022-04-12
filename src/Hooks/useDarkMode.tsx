import React, {useEffect, useState} from "react";

interface hookDarkMode{
  colorTheme: (string)
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export default function useDarkMode(): [hookDarkMode["colorTheme"], hookDarkMode["setTheme"]] {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(localTheme ||'light')

  const colorTheme = theme === 'light' ? 'dark' : 'light'
  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])
  return [colorTheme, setTheme];
}