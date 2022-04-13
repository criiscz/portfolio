import Typical from "../../../CustomComponents/ReactTypical";
import './AnimationSkills.css'

export default function AnimationSkills() {
  const skills = [
    'Un Desarrollador Front-End', 1500,
    'Un Desarrollador Back-End', 1500,
    'Un Desarrollador Full-Stack', 1500,
    'Un Amante de la Programación', 1500,
  ]
  return (
    <Typical
      steps={skills}
      loop={Infinity}
      wrapper="p"
      className={'text-white font-display text-shadow-blue font-semibold text-[#0bf]' +
        ' text-shadow-blue-light pb-2'}
    />
  )
}