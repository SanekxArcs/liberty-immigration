import React from "react";
import blob from "../resourses/blob-haikei.svg";
export default function Footer() {
  return (
    <div>
      <footer className="container mx-auto overflow-hidden">
        <div>
          <div className="375:pl-10 container z-10 flex flex-col items-start justify-between pl-5 md:flex-row md:py-10 md:px-20">
            {/* <!-- Logo Here --> */}
            <div className="ml-1 transition-all duration-500 hover:scale-110 xl:ml-5">
              <a
                href="/"
                className="flex items-start justify-center gap-1 rounded-xl text-lg font-light lg:items-center"
              >
                <svg
                  className="h-12 w-12 fill-white"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24.064 6.583l-3.773 8.375h-1.098l4.024-8.916h-6.213v20.771c1.28 0.047 7.813 2.167 7.813 2.167v1.020h-17.56v-1.089c0 0 6.678-2.099 7.684-2.099v-20.77h-6.015l4.025 8.916h-1.098l-3.773-8.375-3.773 8.375h-1.098l4.048-8.966v-1.034h6.754c0-1.353 0.907-2.458 1.965-2.458 1.119 0 1.965 1.168 1.965 2.458h6.878v0.887l4.116 9.113h-1.098l-3.773-8.375zM13.020 15.979c0 2.693-1.868 5.282-4.939 5.282-3.002 0-4.939-2.589-4.939-5.282-0.001 0.004 9.878 0.004 9.878 0zM19.262 15.979c0 0.005 9.879 0.005 9.879 0 0 2.693-1.868 5.282-4.939 5.282-3.003 0-4.94-2.589-4.94-5.282z"></path>
                </svg>
                <div className="flex flex-col text-start text-slate-100">
                  <span>LIBERTY</span>
                  <span>IMMIGRATIO</span>
                </div>
              </a>
            </div>
            <div className="flex flex-col text-white">
              <p className="border-b border-white text-lg font-medium">
                Розділи сайту:
              </p>
              <a href="#ABOUT" className="transition-all hover:font-bold">
                Етапи співпраці
              </a>
              <a href="#ABOUTus" className="transition-all hover:bg-slate-700">
                Про нас
              </a>
            </div>
            <div className="flex flex-col text-white">
              <a href="#FEATURES" className="transition-all hover:bg-slate-700">
                Чому ми
              </a>
              <a href="#REVIEWS" className="transition-all hover:bg-slate-700 ">
                Відгуки
              </a>
              <a href="#price" className="transition-all hover:bg-slate-700">
                Наші послуги
              </a>
            </div>
            <div className="flex flex-col text-white">
              <a href="#cta" className="transition-all hover:bg-slate-700">
                Запис на консультацію
              </a>
            </div>
          </div>
          <div className="flex justify-center border-t border-slate-700 p-5 text-center text-xs uppercase text-slate-500">
            <h3>
              ©2023 by <a href="https://github.com/SanekxArcs">SanekX Arcs</a>{" "}
              для "LwP iryna romankiv" Всі права захищені!
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute  bottom-96 -left-[40%] -z-10 scale-90 lg:bottom-0">
            <img src={blob} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}
