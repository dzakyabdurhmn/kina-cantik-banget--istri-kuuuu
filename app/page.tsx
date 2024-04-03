import AuthForm from "./auth-form";
import Navbar from "./(main)/components/NavHeader/Navbar";
import Content from "./(main)/section/Content";

// for add data lib string //
import { HeroText } from "./(main)/components/Hero/MainHero";
import { DeskHeroText } from "./(main)/components/Hero/MainHero";
import { Welcome } from "./(main)/components/Authdesk/AuthText";
import { WelcomeDesk } from "./(main)/components/Authdesk/AuthText";
// import Routes //
import LinkApp from "./(main)/Routes/Link_app";
import NavLink from "./(main)/Routes/NavLink_app";

// import CSS //
import "./page.css";
import "./(main)/section/style/Hero.css";
// Landing Page

export default function Home() {
  return (
    <>
      {/* start for landing */}
      <div className="flex justify-center items-center md:justify-center lg:justify-between xl:justify-between mt-5" data-aos="zoom-in" data-aos-delay="200">
        <div>
          <h3 className="text-2xl tracking-tight font-semibold">Whatever</h3>
        </div>
        <div className="hidden md:block md:mt-3 lg:block xl:block">
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className="p-14 pb-6 mt-20 border rounded-xl">
        <div className="items-start">
          <div className="text-center ">
            <div className="text-gray-200 text-5xl md:text-5xl xl:text-8xl Archivo font-semibold">{HeroText}</div>
            <p className=" mt-4 col-7 hidden lg:block xl:block text-sm xl:text-base Archivo mx-auto text-gray-300 xl:leading-relaxed">{DeskHeroText}</p>
            <a href="#authForm">
              <button className="py-2 Archivo w-[250px] rounded-lg text-center font-medium mt-6 bg-[#3fcf8e] hover:bg-[#34b27b] hover:scale-95 duration-100">Get Design</button>
            </a>
            <div className="mt-8 flex justify-center">
              <a className="text-sm text-gray-200 hover:text-[13px] duration-300 hover:underline Archivo" href="#">
                Support us with a your Subsribe :D
              </a>
            </div>
          </div>
        </div>
        <div className="xl:mt-20 grid justify-center md:justify-between md:flex lg:flex xl:flex mb-5 items-center xl:justify-between">
          <div className="hidden md:hidden lg:block xl:block">
            <NavLink />
          </div>
          {/* link route to Social Content */}
          <LinkApp />
        </div>
      </div>

      {/* about section */}
      <div id="About" className="about-section mb-20 -mt-6">
        <div className="flex justify-center">
          <h3 className="py-2 w-40 text-center bg-[#101010] Archivo text-gray-200 text-xl font-semibold rounded-xl">About</h3>
        </div>
      </div>

      {/*  content */}
      <div className="content">
        <div className="container mt-14 mx-auto">
          <Content />
        </div>
      </div>

      {/* for auth Forms */}
      <div className="grid md:gird lg:flex xl:flex items-center mt-40 mb-24 justify-between">
        <div className="col-6">
          <h1 className="header text-2xl font-medium">{Welcome}</h1>
          <p className="description mt-3 Archivo text-sm leading-7">{WelcomeDesk}</p>
        </div>
        <div id="authForm" className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </>
  );
}
