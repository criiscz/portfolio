import './AnimationCriiscz.css';
import {useEffect} from "react";

function LetterBlue({letter}: { letter: string }) {
  return (
    <span className="text font-semibold">{letter}</span>
  )
}

export default function AnimationCriiscz() {
  useEffect(() => {
    const letters = document.querySelectorAll('.letter');
    const fullName = document.querySelectorAll('.full-name');
    const animation = () => {
      setTimeout(() => {
        letters.forEach((letter) => {
          letter.classList.add('active');
          letter.addEventListener('animationend', () => {
            letter.classList.remove('active');
            letter.classList.add('hidden');
            fullName.forEach((letter) => {
              letter.classList.remove('hidden');
            })
          });
        });
      }, 2000);
    };
    animation();
  }, []);
  return (
    <div className=" relative bg-[#00031d]">
      <span className="text-center block text text-3xl hidden">CRIISCZ</span>
      <section className="font-semibold select-none full-name text-shadow-white text-white w-full text-3xl text-center block absolute hidden">
        <LetterBlue letter={'CRI'}/>ST<LetterBlue letter={'I'}/>AN <LetterBlue
        letter={'S'}/>ÁN<LetterBlue letter={'C'}/>HE<LetterBlue letter={'Z'}/>
      </section>
      <section className="font-semibold select-none text block text-center text-3xl uppercase">
        <section className="text__inner text-[#0bf]">
          <span className="letter letter_c first_c">c</span>
          <span className="letter letter_r">r</span>
          <span className="letter letter_i first_i">i</span>
          <span className="letter letter_i second_i">i</span>
          <span className="letter letter_s first_s">s</span>
          <span className="letter letter_c second_c">c</span>
          <span className="letter letter_z">z</span>
        </section>
      </section>
    </div>
  )
}