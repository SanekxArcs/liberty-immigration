import React from "react";
import aboutUsImage from "../../resourses/about-us-section-image.svg";
import { useInView } from "react-intersection-observer";
export default function About() {
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: bloc1Ref, inView: block1Visible } = useInView({
    threshold: 0,
  });

  return (
    <>
      <section
        className="container relative mx-auto overflow-hidden px-4 text-white md:relative"
        id="ABOUTus"
      >
        <div className="container">
          <div className="grid grid-rows-1 md:place-content-center md:gap-10 lg:h-screen xl:grid-cols-2 xl:items-center">
            <img
              ref={imageRef}
              className={`${
                imageIsVisible
                  ? "animate-fadeInLeft opacity-100 animate-delay-300"
                  : " opacity-0"
              } -z-50 h-full w-full bg-contain pb-5 transition-opacity  md:hidden xl:relative xl:opacity-100`}
              src={aboutUsImage}
              alt=""
            />
            <div
              ref={bloc1Ref}
              className={`${
                block1Visible
                  ? "animate-fadeInRight opacity-100 animate-delay-500"
                  : " opacity-0"
              }p-5 md:p-10`}
            >
              <h2 className="text-3xl font-bold md:text-center md:text-7xl xl:text-left ">
                Про нас
              </h2>
              <div className="mt-2 mb-5 text-start md:text-center lg:mb-10">
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
                <span className="inline-block h-1 w-44 rounded-full bg-slate-500 lg:w-64"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
              </div>
              <p className="text-sm md:text-lg ">
                Наша компанія заснована з метою надання професійної та всебічної
                юридичної підтримки іноземцям в Польщі. Завдяки багаторічному
                досвіду та відданій команді юридичних експертів ми допоможемо
                уникнути проблем у процесі легалізації..
                <br />
                <br />
                Наша мета — зробити цей процес максимально простим і без стресу
                для наших клієнтів. Ми пропонуємо повну підтримку, супроводжуючи
                клієнтів на кожному етапі процесу та гарантуючи захист їхніх
                прав та інтересів.
                <br />
                <br />
                Ми пишаємося репутацією високоякісних послуг із індивідуальним
                підходом. Наші клієнти можуть розраховувати на індивідуальний
                підхід та знайдення найкращих рішень для конкретних потреб.
                <br />
                <br />
                Наша команда допоможе Вам побудувати безпечне та стабільне
                мабутнє у Польщі.
                <br />
                <br /> Зв’яжіться з нами сьогодні, щоб дізнатися про те, як ми
                можемо допомогти вам досягти ваших цілей.
              </p>
              <div className="grid place-content-center py-5 md:place-content-start">
                <a
                  href="#FEATURES"
                  className="mt-auto flex w-full justify-center rounded-xl bg-sky-600 px-8 py-2 text-base font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg md:px-16 md:py-5 md:text-xl"
                >
                  Дізнатись більше
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
