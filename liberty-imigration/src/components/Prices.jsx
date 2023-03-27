import React from "react";

import { useInView } from "react-intersection-observer";

const Prices = () => {
  const { ref: h2s6Ref1, inView: h2s6IsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: priceCardRef1, inView: priceCardIsVisible1 } = useInView({
    threshold: 0,
  });
  const { ref: priceCardRef2, inView: priceCardIsVisible2 } = useInView({
    threshold: 0,
  });
  const { ref: priceCardRef3, inView: priceCardIsVisible3 } = useInView({
    threshold: 0,
  });
  return (
    <>
      <section
        className="container mx-auto overflow-hidden pb-10 md:pb-40"
        id="price"
      >
        <div className="container ">
          <h2
            ref={h2s6Ref1}
            className={`${
              h2s6IsVisible1 ? "animate-fadeIn animate-delay-300" : ""
            } text-center text-3xl font-bold text-slate-100 md:text-6xl`}
          >
            Наші послуги
          </h2>
          <div className="mn-5 text-center lg:mt-5 lg:mb-10">
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="inline-block h-1 w-44 rounded-full bg-slate-500 lg:w-64"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
          </div>

          <div className="flex flex-col items-center justify-center gap-7 pt-10 lg:flex-row lg:items-stretch lg:gap-5">
            {/* <!-- CARD 1 --> */}
            <div
              ref={priceCardRef1}
              className={`${
                priceCardIsVisible1
                  ? "animate-fadeInLeft animate-delay-300"
                  : ""
              } 425:w-80 relative flex w-72 flex-col items-center justify-start overflow-hidden  rounded-xl bg-white/80 p-10 transition-all hover:-translate-y-2 hover:shadow-lg md:w-11/12 lg:w-[30%]  lg:justify-start`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-20 w-20 pb-2 text-slate-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
              <h2 className="text-center text-lg font-semibold text-slate-900">
                Дозвіл на тимчасове перебування
              </h2>
              <p className="pt-3 text-slate-700 ">Ціна:</p>
              <p className="pb-3 font-semibold text-slate-700">1500 zl</p>

              <p className="pb-3 font-normal text-slate-700">
                Дозвіл на тимчасове перебування видається терміном від 3 місяців
                до 3 років. Наш спеціаліст допоможе в оформленні цього виду
                дозволу на підставі:
              </p>
              <ul className="list-disc pb-3 text-start font-normal text-slate-700">
                <li>Офіційного працевлаштування у Польщі.</li>
                <li>Ведення підприємницької діяльності на території Польщі.</li>
                <li>
                  Навчання у польських навчальних закладах (ВНЗ, поліцеальні
                  школи).
                </li>
                <li>
                  Возз'єднання з членом сім'ї, який вже має карту побуту/
                  громадянство РП.
                </li>
                <li>
                  Возз'єднання сім'ї у зв'язку з шлюбом з громадянином Польщі.
                </li>
                <li>За інших обставин.</li>
              </ul>
              <a
                href="tel:+4873514560"
                className="mt-auto flex w-full justify-center rounded-xl bg-sky-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg"
              >
                Деталі
              </a>
              <div className="absolute -left-24 top-10 z-30 -rotate-45 bg-yellow-300 px-20 shadow-lg">
                <h3 className="text-center text-sm font-medium text-slate-900">
                  Оплата після <br /> отриманя рішення*
                </h3>
              </div>
            </div>

            {/* <!-- CARD 2 --> */}
            <div
              ref={priceCardRef2}
              className={`${
                priceCardIsVisible2 ? "animate-fadeIn animate-delay-300" : ""
              } 425:w-80 relative  flex w-72 flex-col content-center items-center justify-start overflow-hidden rounded-xl bg-white/80 p-10 transition-all hover:-translate-y-2 hover:shadow-lg md:w-11/12 lg:w-[30%]  lg:justify-start`}
            >
              <svg
                className="h-20 w-20 pb-2 text-slate-900"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect
                    x="4"
                    y="3"
                    width="16"
                    height="18"
                    rx="1"
                    stroke="#200E32"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  ></rect>
                  <path
                    d="M9 17H15"
                    stroke="#200E32"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="10"
                    r="4.25"
                    stroke="#200E32"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M13.25 10C13.25 11.3097 13.0363 12.4609 12.7179 13.257C12.5578 13.6571 12.386 13.9306 12.2336 14.0917C12.0837 14.2502 12.0046 14.25 12.0001 14.25H12H11.9999C11.9954 14.25 11.9163 14.2502 11.7664 14.0917C11.614 13.9306 11.4422 13.6571 11.2821 13.257C10.9637 12.4609 10.75 11.3097 10.75 10C10.75 8.69028 10.9637 7.53908 11.2821 6.74301C11.4422 6.34289 11.614 6.06943 11.7664 5.90826C11.9163 5.7498 11.9954 5.74999 11.9999 5.75L12 5.75L12.0001 5.75C12.0046 5.74999 12.0837 5.7498 12.2336 5.90826C12.386 6.06943 12.5578 6.34289 12.7179 6.74301C13.0363 7.53908 13.25 8.69028 13.25 10Z"
                    stroke="#200E32"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 10H16"
                    stroke="#200E32"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>

              <h2 className="text-center text-lg font-medium text-slate-900">
                Дозвіл на постійне перебування /
                <br />
                Довготермінового резидента UE
              </h2>
              <p className="pt-3 text-slate-700 ">Ціна:</p>
              <p className="pb-3 font-semibold text-slate-700">2000 zl</p>

              <p className="pb-3 text-start font-normal text-slate-700">
                Дозвіл на постійне перебування / довготермінового резидента
                видається на 5-10 років (рішення видається на постійній основі).
                Наш спеціаліст допоможе в оформленні такого виду дозволу на
                підставі:
              </p>
              <ul className="list-disc pb-3 text-start font-normal text-slate-700">
                <li>Польського походження.</li>
                <li>Карти Поляка.</li>
                <li>Надання статусу біженця або додаткового захисту.</li>
                <li>
                  Шлюбу, визнаного польським законом, із польським громадянином.
                </li>
              </ul>
              <a
                href="tel:+4873514560"
                className="mt-auto flex w-full justify-center rounded-xl bg-sky-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg"
              >
                Деталі
              </a>
              <div className="absolute -left-24 top-10 z-30 -rotate-45 bg-yellow-300 px-20 shadow-lg">
                <h3 className="text-center text-sm font-medium text-slate-900">
                  Оплата після
                  <br />
                  отриманя рішення*
                </h3>
              </div>
            </div>

            {/* <!-- CARD 3 --> */}
            <div
              ref={priceCardRef3}
              className={`${
                priceCardIsVisible3
                  ? "animate-fadeInRight animate-delay-300"
                  : ""
              } 425:w-80  relative flex w-72  flex-col content-center items-center justify-start rounded-xl bg-white/80 p-10 transition-all hover:-translate-y-2 hover:shadow-lg md:w-11/12 lg:w-[30%]  lg:justify-start`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-20 w-20 pb-2 text-slate-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <h2 className="text-center text-lg font-semibold text-slate-900">
                Інші послуги
              </h2>
              <p className="pt-3 text-slate-700">Ціни:</p>
              <p className="pb-3 font-semibold text-slate-700">від 100 zl</p>
              <ul className="list-disc pb-3 font-normal text-slate-700">
                <li>
                  Написання апеляції після негативного рішення по Карті Побиту.
                </li>
                <li>Opinia starosty.</li>
                <li>Оформлення номеру песель.</li>
                <li>Довідка з податкової o niezaleganiu w podatkach.</li>
                <li>Довідка про несудимість.</li>
                <li>Повернення оплати скарбової.</li>
                <li>Пришвидшення розгляду справи.</li>
                <li>Заміна карти побиту/рішення.</li>
                <li>Запис на подачу документів у Варшаві.</li>
                <li>І інші.</li>
              </ul>
              <a
                href="tel:+4873514560"
                className="mt-auto flex w-full justify-center rounded-xl bg-sky-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg"
              >
                Деталі
              </a>
            </div>
          </div>
          <div className="w-full">
            <p className="pt-5 text-center text-sm leading-tight text-slate-400">
              <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                *
              </span>
              Оплата ділиться на частини, остання частина оплачується після
              отримання позитивного рішення по справі.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
