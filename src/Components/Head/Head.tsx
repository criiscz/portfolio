import AnimationCriiscz from './InComponents/AnimationCriiscz';
import AnimationSkills from "./InComponents/AnimationSkills";

export default function Header() {
  const texts = ['Mi nombre es', 'soy']
  const styleText = {
    principal: "font-display text-xl text-white flex justify-center items-center w-full bg-[#00031d]"
  }

  return (
    <div className={"w-full  head h-40"}>
      <div className={styleText.principal + ' pb-2'}>{texts[0]}</div>
      <AnimationCriiscz />
      <div className={styleText.principal + ' text-lg p-2 font-semibold'}>{texts[1]}</div>
      <div className="text-2xl text-center block w-full bg-[#00031d]">
        <AnimationSkills/>
      </div>

      <svg className=" z-0 animate-wave fill-[#00031d] translate-y-0 h-full w-full"
           viewBox="0 0 500 120" preserveAspectRatio="none">
        <path d="M-20.62,85.53 C164.50,166.30 254.22,30.38 501.41,96.36 L500.00,0.00 L0.00,0.00 Z"
              className="stroke-0"/>
      </svg>
    </div>
  )
}