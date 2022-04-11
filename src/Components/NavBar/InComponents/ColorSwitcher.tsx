import '../../../CssModules/ColorSwitcher.module.css'
import {Icon} from '@iconify/react'
import {useState} from "react";
import useDarkMode from "../../../Hooks/useDarkMode";

export default function ColorSwitcher() {
  const [isChecked, setIsChecked] = useState(false)
  const [colorTheme, setTheme] = useDarkMode()
  const changeState = () => {
    setIsChecked(!isChecked)
    setTheme(colorTheme)
  }

  let styles = {
    NavBar: {
      ColorSwitcher: {
        checkbox: "" +
          "checked:hover:bg-white " +
          "relative " +
          "h-6 " +
          "w-10 " +
          "appearance-none " +
          "rounded-full " +
          "border-2 " +
          "border-[#00031d] " +
          "bg-white " +
          "transition-all " +
          "duration-150 " +
          "after:absolute " +
          "after:top-0.5 " +
          "after:left-[1.5px] " +
          "after:h-4 " +
          "after:w-4 " +
          "after:rounded-full " +
          "after:bg-[#00031d] " +
          "checked:h-6 " +
          "checked:w-10 " +
          "checked:bg-white " +
          "checked:after:translate-x-[1rem] " +
          "transition-all " +
          "duration-150 " +
          "checked:after:transition-all " +
          "duration-150 " +
          "after:transition-all " +
          "after:duration-150",
        moon_icon: "cursor-pointer left-[1.4rem] top-1.5 h-3 w-3 text-white absolute"
      }
    }
  }

  return (
    <div className="right-20 absolute flex gap-5 font-display">
      <input type="checkbox" id="color-switcher"
             className={styles.NavBar.ColorSwitcher.checkbox}
             onChange={changeState}
             checked={colorTheme==='light'}
      />

      <label htmlFor="color-switcher" className="absolute z-10">
        {
          isChecked ?
            <Icon icon={'bi:sun-fill'} className="cursor-pointer left-[0.35rem] top-1.5 h-3 w-3 text-white
      absolute"/> :
            <Icon icon={'bi:moon-fill'} className={styles.NavBar.ColorSwitcher.moon_icon}/>
        }

      </label>
    </div>
  )
}


