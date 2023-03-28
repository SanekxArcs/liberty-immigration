import React from "react";
import { useInView } from "react-intersection-observer";

import blob from "../../resourses/blob-haikei.svg";
import featureImage1 from "../../resourses/features-01.png";
import featureImage2 from "../../resourses/features-02.png";
import featureImage3 from "../../resourses/features-03.png";
import featureImage4 from "../../resourses/features-04.png";

export default function Features() {
  const { ref: featuresRef1, inView: featuresIsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: h2Ref1, inView: h2IsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: featuresRef2, inView: featuresIsVisible2 } = useInView({
    threshold: 0,
  });
  const { ref: featuresRef3, inView: featuresIsVisible3 } = useInView({
    threshold: 0,
  });
  const { ref: featuresRef4, inView: featuresIsVisible4 } = useInView({
    threshold: 0,
  });
  return (
    <div>
      {" "}
      <section
        className="container relative mx-auto overflow-visible pt-10"
        id="FEATURES"
      >
        <div className="container px-2">
          <h2
            ref={h2Ref1}
            className={`${
              h2IsVisible1 ? "animate-fadeIn animate-delay-500" : ""
            }z-10 pt-10 text-center text-3xl font-bold text-slate-100 md:text-6xl`}
          >
            <span className="text-slate-200 xl:text-slate-700">Чому саме</span>{" "}
            <br className="md:text-xl lg:hidden" />
            "LIBERTY IMMIGRATION"
          </h2>
          <div className="mt-5 mb-10 text-center">
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="inline-block h-1 w-40 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
          </div>

          <div className="grid justify-items-start overflow-hidden rounded-xl bg-slate-100/70 text-slate-900 md:grid-cols-2 md:grid-rows-2 md:gap-9 md:py-10 md:px-20">
            <div
              ref={featuresRef1}
              className={`${
                featuresIsVisible1
                  ? "animate-fadeInLeft opacity-100"
                  : " opacity-0"
              } flex items-center justify-center transition-opacity`}
            >
              <img className="m-5 w-20" src={featureImage1} alt="" />
              <p className="text-base font-medium text-slate-900 md:text-2xl">
                Індивідуальний підхід та прозорість умов
              </p>
            </div>

            <div
              ref={featuresRef2}
              className={`${
                featuresIsVisible2
                  ? "animate-fadeInRight opacity-100 lg:animate-delay-300"
                  : " opacity-0"
              } flex items-center justify-center transition-opacity`}
            >
              <img className="m-5 w-20" src={featureImage4} alt="" />
              <p className="text-base font-medium text-slate-900 md:text-2xl">
                Експертність та професіоналізм на всіх етапах роботи
              </p>
            </div>

            <div
              ref={featuresRef3}
              className={`${
                featuresIsVisible3
                  ? "animate-fadeInLeft opacity-100 lg:animate-delay-500"
                  : " opacity-0"
              } flex items-center justify-center transition-opacity`}
            >
              <img className="m-5 w-20" src={featureImage3} alt="" />
              <p className="text-base font-medium text-slate-900 md:text-2xl">
                Гарантія якості послуг
              </p>
            </div>

            <div
              ref={featuresRef4}
              className={`${
                featuresIsVisible4
                  ? "animate-fadeInRight opacity-100 lg:animate-delay-700"
                  : " opacity-0"
              } flex items-center justify-center transition-opacity`}
            >
              <img className="m-5 w-20" src={featureImage2} alt="" />
              <p className="text-base font-medium text-slate-900 md:text-2xl">
                3-річний досвід у сфері легалізації перебування та імміграції
              </p>
            </div>
          </div>
          <div className="absolute left-[-23%]  -z-10 w-[70%] rotate-180 scale-[2.1] xl:bottom-40 2xl:bottom-0">
            <img src={blob} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
