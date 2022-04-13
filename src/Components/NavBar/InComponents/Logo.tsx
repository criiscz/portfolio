import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function Logo() {
  return (
    <HashLink smooth to="#top" className="ml-5 font-bold text-white font-display hover:text-[#00c8ff] transition-all duration-150 hover:transition-all hover:duration-150">CSZ</HashLink>
  )
}