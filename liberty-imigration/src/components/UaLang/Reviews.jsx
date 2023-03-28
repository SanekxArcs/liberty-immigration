import React from "react";
import faceImage1 from "../../resourses/face-review-1.svg";
import faceImage2 from "../../resourses/face-review-2.svg";
import faceImage3 from "../../resourses/face-review-3.svg";
import faceImage4 from "../../resourses/face-review-4.svg";
import blob from "../../resourses/blob-haikei.svg";

import { useInView } from "react-intersection-observer";

export default function Reviews() {
  const { ref: h2s5Ref1, inView: h2s5IsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: reviewRef1, inView: reviewIsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: reviewRef2, inView: reviewIsVisible2 } = useInView({
    threshold: 0,
  });
  const { ref: reviewRef3, inView: reviewIsVisible3 } = useInView({
    threshold: 0,
  });
  const { ref: reviewRef4, inView: reviewIsVisible4 } = useInView({
    threshold: 0,
  });
  const { ref: reviewRef5, inView: reviewIsVisible5 } = useInView({
    threshold: 0,
  });
  const { ref: reviewRef6, inView: reviewIsVisible6 } = useInView({
    threshold: 0,
  });
  return (
    <>
      <section className="relative" id="REVIEWS">
        <div className="container mx-auto flex items-center justify-center ">
          <div className="px-5 py-16 text-gray-800 md:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto text-center ">
                <h2
                  ref={h2s5Ref1}
                  className={`${
                    h2s5IsVisible1 ? "animate-fadeIn lg:animate-delay-300 opacity-100" : " opacity-0"
                  } transition-opacity mb-5 text-3xl font-bold text-slate-100 md:text-6xl`}
                >
                  Що кажуть про нас.
                </h2>
                <div className="mb-10 text-center">
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
                  <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
                  <span className="inline-block h-1 w-40 rounded-full bg-slate-500"></span>
                  <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
                </div>
              </div>

              <div className="-mx-3 items-start md:flex">
                <div className="px-3 md:w-1/3">
                  <div
                    ref={reviewRef1}
                    className={`${
                      reviewIsVisible1 ? "animate-fadeInLeft opacity-100" : " opacity-0"
                    } transition-opacity mx-auto mb-6 w-full rounded-xl border border-gray-200 bg-white/80 p-5 font-light text-gray-800`}
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        <img src={faceImage3} alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          Ірина
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                        Я дуже задоволена послугами цієї фірми! Вони допомогли
                        мені легалізуватися в Польщі і все проходило дуже швидко
                        і без проблем. Рекомендую всім!
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    ref={reviewRef2}
                    className={`${
                      reviewIsVisible2 ? "animate-fadeInLeft opacity-100" : " opacity-0"
                    } transition-opacity  mx -auto mb-6 w-full rounded-xl border border-gray-200 bg-white/80 p-5 font-light text-gray-800`}
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        <img src={faceImage1} alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          Олексій
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>{" "}
                        Хочу висловити подяку фірмі за їх допомогу з
                        легалізацією в Польщі. Це було дуже важливо для мене і
                        вони зробили все, щоб процес пройшов якнайлегше.
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3 md:w-1/3">
                  <div
                    ref={reviewRef3}
                    className={`${
                      reviewIsVisible3 ? "animate-fadeInLeft opacity-100" : " opacity-0"
                    } transition-opacity mx -auto mb-6 w-full rounded-xl border border-gray-200 bg-white/80 p-5 font-light text-gray-800`}
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        <img src={faceImage4} alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          Марія
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                        Я звернулася до цієї фірми з питанням легалізації в
                        Польщі і не пошкодувала. Вони надали мені високоякісну
                        допомогу і завжди були готові відповісти на мої
                        запитання.
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    ref={reviewRef4}
                    className={`${
                      reviewIsVisible4 ? "animate-fadeInLeft opacity-100" : " opacity-0"
                    } transition-opacity mx -auto mb-6 w-full rounded-xl border border-gray-200 bg-white/80 p-5 font-light text-gray-800`}
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        <img src={faceImage2} alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          Сергій
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                        Сергій: Дякую фірмі за їх професіоналізм і вміння
                        допомогти мені з легалізацією в Польщі. Я не міг би
                        цього зробити без їхньої допомоги!
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3 md:w-1/3">
                  <div
                    ref={reviewRef5}
                    className={`${
                      reviewIsVisible5 ? "animate-fadeInLeft opacity-100" : " opacity-0"
                    } transition-opacity mx -auto mb-6 w-full rounded-xl border border-gray-200 bg-white/80 p-5 font-light text-gray-800`}
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        <img src={faceImage4} alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          Наталія
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                        Ця фірма допомогла мені отримати всі необхідні документи
                        для легалізації в Польщі і виконала свої обіцянки в
                        строк. Я щиро рекомендую їх послуги.
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    ref={reviewRef6}
                    className={`${
                      reviewIsVisible6 ? "animate-fadeInLeft opacity-100" : " opacity-0"
                    } transition-opacity mx -auto mb-6 w-full rounded-xl border border-gray-200 bg-white/80 p-5 font-light text-gray-800`}
                  >
                    <div className="mb-4 flex w-full items-center">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                        <img src={faceImage1} alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="text-sm font-bold uppercase text-gray-600">
                          Володимир
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                        Я задоволений роботою цієї фірми з легалізації в Польщі.
                        Вони були дуже професійні і завжди готові надати
                        допомогу. Якщо ви шукаєте надійну фірму, я рекомендую
                        звернутися до них.
                        <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-thin text-slate-400">
              *Усі відгуки були опубліковані за згодою клієнтів.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 -top-96 -bottom-96 overflow-hidden">
          <div className="absolute  bottom-0 -right-[40%] -z-10 lg:bottom-0">
            <img src={blob} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
