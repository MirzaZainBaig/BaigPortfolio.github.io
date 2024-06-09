import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/MirzaResume.pdf";
import { bannerImg4 } from "../../assets/index";
import Contact from "../contact/Contact";
const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", 'Data Scientist'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover"
          src={bannerImg4}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl px-4 font-semibold">Mirza Muhammad Zain</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"
              href="https://github.com/MirzaZainBaig"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"
              href="https://www.linkedin.com/in/mirzamuhammadzain/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"
              href="https://www.facebook.com/share/Xz2Ko8HjVSVqjSda/?mibextid=qi2Omg"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"
              href="https://www.instagram.com/i_am_mughalmirza?utm_source=qr&igsh=dnp3ZXgyajNyZzUx"
              target="_blank"
            >
              <FiInstagram />
            </a>
            <a className="hover:text-designColor duration-300 cursor-pointer text-xl"
              href="https://www.hackerrank.com/profile/zainm4057"
              target="_blank"
            >
              <FaHackerrank />
            </a>
          </div>
        </div>
        <div className="flex justify-center h-14 py-10">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV
              <BsCloudLightningFill />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;