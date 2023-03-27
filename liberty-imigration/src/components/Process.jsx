import React from "react";
import { useInView } from "react-intersection-observer";

import ProcessImage1 from "../resourses/features-1.svg";
import ProcessImage2 from "../resourses/features-2.svg";
import ProcessImage3 from "../resourses/features-3.svg";
import ProcessImage4 from "../resourses/features-4.svg";

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
              h2s2IsVisible1 ? "animate-fadeIn animate-delay-300" : ""
            } z-10 px-5 text-center text-3xl font-bold md:text-7xl`}
          >
            Етапи співпраці з нами:
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
                  ? "animate-fadeInRight lg:animate-delay-[700ms]"
                  : ""
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage1} alt="" className="pk b-2 h-32" />
              <h4 className="sky z-10 pb-2 text-xl font-semibold">
                Зв’яжіться
              </h4>
              <p className="z-10 text-center">
                Cконтрактуйтесь з нашою компанією.
              </p>
            </div>

            <div
              ref={processRef2}
              className={`${
                processIsVisible2
                  ? "animate-fadeInRight lg:animate-delay-500"
                  : ""
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage2} alt="" className="h-32 pb-2" />
              <h4 className="sky pb-2 text-lg font-semibold">Консультація</h4>
              <p className="text-center ">
                На консультації наш експерт запропонує Вам найбільш вдалий
                варіант вирішення вашого запиту
              </p>
            </div>

            <div
              ref={processRef3}
              className={`${
                processIsVisible3
                  ? "animate-fadeInRight lg:animate-delay-300"
                  : ""
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage3} alt="" className="h-32 pb-2" />
              <h4 className="sky pb-2 text-xl font-semibold">Послуга</h4>
              <p className="text-center ">
                Надайте необхідну інформацію, Ми підготуємо пакет документів та
                починемо процес реалізації послуги.
              </p>
            </div>

            <div
              ref={processRef4}
              className={`${
                processIsVisible4 ? "animate-fadeInRight " : ""
              } z-10 flex flex-col items-center justify-center rounded-xl bg-slate-700 p-3 transition-all hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg`}
            >
              <img src={ProcessImage4} alt="" className="h-32 pb-2" />
              <h4 className="sky pb-2 text-xl font-semibold">Результат</h4>
              <p className="text-center ">
                Ви отримаєте легальний статус у Польщі.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
