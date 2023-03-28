import React from "react";
import { useInView } from "react-intersection-observer";

import ProcessImage1 from "../../resourses/features-1.svg";
import ProcessImage2 from "../../resourses/features-2.svg";
import ProcessImage3 from "../../resourses/features-3.svg";
import ProcessImage4 from "../../resourses/features-4.svg";

export default function Process() {
  const { ref: h2s2Ref1, inView: h2s2IsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: processRef1, inView: processIsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: processRef2, inView: processIsVisible2 } = useInView({
    threshold: 0,
  });
  const { ref: processRef3, inView: processIsVisible3 } = useInView({
    threshold: 0,
  });
  const { ref: processRef4, inView: processIsVisible4 } = useInView({
    threshold: 0,
  });
  return (
    <>
      <section
        className="container mx-auto overflow-hidden pt-20 text-slate-50 lg:p-0"
        id="ABOUT"
      >
        <div className="container z-10 flex flex-col items-center justify-center pb-10 md:pt-20">
          <h2
            ref={h2s2Ref1}
            className={`${
              h2s2IsVisible1
                ? "animate-fadeIn opacity-100 animate-delay-300"
                : " opacity-0"
            } z-10 px-5 text-center text-3xl font-bold transition-opacity md:text-7xl`}
          >
            Этапы супрацоўніцтва з намі:
          </h2>
          <div className="z-10 mb-5 text-center lg:mt-5 lg:mb-10">
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="inline-block h-1 w-44 rounded-full bg-slate-500 lg:w-64"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
          </div>

          <div
            ref={processRef1}
            className={`grid grid-rows-4 items-stretch gap-4 px-5 pt-0 md:grid-cols-2 md:grid-rows-2 md:gap-10 lg:grid-cols-4 lg:grid-rows-1 lg:pt-20`}
          >
            <div
              className={`${
                processIsVisible1
                  ? "animate-fadeInRight opacity-100 lg:animate-delay-[700ms]"
                  : " opacity-0"
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all  hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage1} alt="" className="pk b-2 h-32" />
              <h4 className="sky z-10 pb-2 text-xl font-semibold">Звязацца</h4>
              <p className="z-10 text-center">Кантракт з нашай кампаніяй.</p>
            </div>

            <div
              ref={processRef2}
              className={`${
                processIsVisible2
                  ? "animate-fadeInRight opacity-100 lg:animate-delay-500"
                  : " opacity-0"
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage2} alt="" className="h-32 pb-2" />
              <h4 className="sky pb-2 text-lg font-semibold">Савет</h4>
              <p className="text-center ">
                На кансультацыі наш спецыяліст прапануе вам найбольш удалы
                рашэнне вашага запыту
              </p>
            </div>

            <div
              ref={processRef3}
              className={`${
                processIsVisible3
                  ? "animate-fadeInRight opacity-100 lg:animate-delay-300"
                  : " opacity-0"
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage3} alt="" className="h-32 pb-2" />
              <h4 className="sky pb-2 text-xl font-semibold">Абслугоўванне</h4>
              <p className="text-center ">
                Падайце неабходную інфармацыю, мы падрыхтуем пакет дакументаў і
                пачнем працэс укаранення сэрвісу.
              </p>
            </div>

            <div
              ref={processRef4}
              className={`${
                processIsVisible4
                  ? "animate-fadeInRight opacity-100"
                  : " opacity-0"
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage4} alt="" className="h-32 pb-2" />
              <h4 className="sky pb-2 text-xl font-semibold">Вынік</h4>
              <p className="text-center ">
                Вы атрымаеце легальны статус у Польшчы.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
