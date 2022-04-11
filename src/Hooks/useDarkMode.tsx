import React, {useEffect, useState} from "react";

export default function useDarkMode(): [string, React.Dispatch<React.SetStateAction<string>>] {
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
  // const [theme, setTheme] = useState('light');
  // const colorTheme = theme === 'light' ? 'dark' : 'light';
  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.remove(colorTheme);
  //   root.classList.add(theme);
  // }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}