import React from "react";
import heroImg from "../../resourses/hero-image.webp";
import blob from "../../resourses/blob-haikei.svg";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="justify-top flex flex-col items-start px-2 lg:px-10 xl:h-screen">
            <div className="">
              <h1
                className={`animate-fadeIn pt-10 pb-4 text-start text-4xl font-bold text-slate-100 md:text-8xl lg:text-9xl xl:pt-32`}
              >
                LIBERTY IMMIGRATION
              </h1>
              <p className="animate-fadeIn pb-6 text-start text-lg font-extralight uppercase text-slate-400 animate-delay-[300ms] lg:flex lg:w-full lg:justify-start lg:text-justify lg:text-xl">
                Спрасціце свой лад жыцця ў Польшчы з нашай дапамогай у
                легалізацыі!
              </p>
            </div>
            <p className="animate-fadeIn pb-3 text-base font-light text-slate-200 animate-delay-[600ms] md:pb-10 lg:w-1/2 lg:text-lg xl:pb-20">
              <span className="font-medium text-slate-100 ">
                Мы каманда прафесіяналаў
              </span>
              , якая паспяхова забяспечвае іміграцыю і паслугі па легалізацыі ў
              Польшчы для замежных грамадзян. Мы клапоцімся аб што кожны кліент
              атрымлівае якаснае і індывідуальнае падтрымка, якая адпавядае іх
              патрэбам і чаканням.
            </p>

            <div className="z-20 grid place-content-center md:place-content-start">
              <a
                href="#contacts"
                className="mt-auto flex w-full animate-fadeIn justify-center rounded-xl bg-sky-600 px-8 py-2 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out animate-delay-[900ms] hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg md:px-16 md:py-5 md:text-xl"
              >
                Бясплатная кансультацыя
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 -z-40 hidden w-[70%] object-cover lg:-bottom-32 lg:block xl:bottom-0">
          <img className="animate-fadeInUp" src={heroImg} alt="" />
        </div>
        <div className="absolute top-0 left-0 right-0 -bottom-96 -z-50 overflow-hidden">
          <div className="xl:0 absolute hidden scale-[1.6] object-cover lg:bottom-40 lg:-right-[0] lg:block lg:pl-96  xl:bottom-0 xl:-right-[60%] xl:p-0 2xl:bottom-40 2xl:-right-[40%]">
            <img className="animate-fadeInUp" src={blob} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
