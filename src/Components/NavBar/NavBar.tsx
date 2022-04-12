import Links from "./InComponents/Links";
import Logo from "./InComponents/Logo";
import LinkTo from "./InComponents/LinkTo";
import ColorSwitcher from "./InComponents/ColorSwitcher";
import LanguageSelector from "./InComponents/LanguageSelector";

export default function NavBar() {
  return (
    <div className="bg-[#00031d] p-5 flex w-full relative h-16">
      <Logo/>
      <Links>
        <LinkTo to="/about">Acerca</LinkTo>
        <LinkTo to="/projects">Proyectos</LinkTo>
        <LinkTo to="/contact">Contacto</LinkTo>
      </Links>
      <ColorSwitcher/>
      <LanguageSelector/>
    </div>
  )
}