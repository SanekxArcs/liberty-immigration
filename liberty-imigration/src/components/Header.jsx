import React from "react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const onClickHandleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpen(true);
  };

  const onClickHandle = () => {
    setIsOpen(!isOpen);
    setIsOpenMenu(true);
  };
  return (
    <>
      <header className="sticky top-0 z-40 w-full animate-fadeInDown bg-gradient-to-r from-slate-900 to-slate-700 text-white drop-shadow-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-0">
          <div className="ml-1 rounded-xl text-lg font-light transition-all duration-300 hover:scale-105 xl:ml-5">
            <a href="/" className="flex items-center justify-center gap-2 ">
              <svg
                className="h-12 w-12 fill-white"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.064 6.583l-3.773 8.375h-1.098l4.024-8.916h-6.213v20.771c1.28 0.047 7.813 2.167 7.813 2.167v1.020h-17.56v-1.089c0 0 6.678-2.099 7.684-2.099v-20.77h-6.015l4.025 8.916h-1.098l-3.773-8.375-3.773 8.375h-1.098l4.048-8.966v-1.034h6.754c0-1.353 0.907-2.458 1.965-2.458 1.119 0 1.965 1.168 1.965 2.458h6.878v0.887l4.116 9.113h-1.098l-3.773-8.375zM13.020 15.979c0 2.693-1.868 5.282-4.939 5.282-3.002 0-4.939-2.589-4.939-5.282-0.001 0.004 9.878 0.004 9.878 0zM19.262 15.979c0 0.005 9.879 0.005 9.879 0 0 2.693-1.868 5.282-4.939 5.282-3.003 0-4.94-2.589-4.94-5.282z"></path>
              </svg>
              <div className="flex flex-col text-start">
                <span>LIBERTY</span>
                <span>IMMIGRATION</span>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 px-2">
            <nav
              id="menu"
              className="fixed top-0 right-0 z-50 my-auto hidden flex-col space-x-6 px-10 py-16 text-slate-50 lg:relative lg:flex lg:p-1 "
            >
              <ul className="flex flex-nowrap content-center items-center justify-around gap-6 fill-white text-center font-medium">
                {/* <!-- Phone number --> */}
                <li className="">
                  <a
                    href="tel:+48517603660"
                    className="flex items-center gap-1 rounded-xl p-2 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>
                    +48 517 603 660
                  </a>
                </li>

                {/* <!-- MAIL --> */}
                <li className="">
                  <a
                    href="mailto:immigration.biuro@gmail.com"
                    className="flex items-center gap-1 rounded-xl px-2 py-1 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-600"
                  >
                    <svg
                      className="h-8 w-8 "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z" />
                      <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                    immigration.biuro@gmail.com
                  </a>
                </li>

                {/* <!-- INSTAGRAM --> */}
                <li className="">
                  <a
                    href="/"
                    className="flex items-center gap-1 rounded-xl px-2 py-1 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-600"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 192 192"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeWidth="12"
                        d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="30"
                        stroke="#fff"
                        strokeWidth="12"
                      />
                      <circle cx="135" cy="57" r="9" fill="#fff" />
                    </svg>
                    @liberty-im
                  </a>
                </li>
              </ul>
            </nav>
            {/* LANG BUTTON */}
            <div className="relative">
              <button
                onClick={onClickHandle}
                className="rounded-lg bg-slate-600 p-2 transition-all duration-300 hover:scale-110 hover:bg-slate-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              </button>

              <ul
                className={`${
                  isOpen ? "hidden" : "absolute"
                } top-12 right-0 rounded-xl bg-slate-600 p-2 shadow-lg`}
              >
                <li className="w-full rounded-xl p-2 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-400">
                  <a href="/UA">UA</a>
                </li>

                <li className="w-full rounded-xl p-2 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-400">
                  <a href="/PL">PL</a>
                </li>
                <li className="w-full rounded-xl p-2 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-400">
                  <a href="/BY">BL</a>
                </li>
              </ul>
            </div>
            {/* MOBILE NAVIGATION */}
            {/* MENU BUTTON */}
            <div className="relative lg:hidden">
              <button
                onClick={onClickHandleMenu}
                className="flex flex-col justify-between gap-1 rounded-lg bg-slate-600 p-2.5"
              >
                <span className="h-1 w-5 rounded-full bg-white"></span>
                <span className="h-1 w-5 rounded-full bg-white"></span>
                <span className="h-1 w-5 rounded-full bg-white"></span>
              </button>
              <ul
                className={`${
                  isOpenMenu ? "hidden" : "absolute"
                } right-0 top-12 rounded-lg bg-slate-600 p-2 shadow-lg`}
              >
                <ul className="flex flex-col items-center justify-around gap-2 fill-white px-2 font-medium">
                  {/* <!-- Phone number --> */}
                  <li className="w-full rounded-xl p-2 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-400">
                    <a
                      href="tel:+48517603660"
                      className="flex items-center gap-1 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                      +48 517 603 660
                    </a>
                  </li>

                  {/* <!-- MAIL --> */}
                  <li className="w-full rounded-xl px-2 py-1 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-400">
                    <a
                      href="mailto:immigration.biuro@gmail.com"
                      className="flex items-center gap-1"
                    >
                      <svg
                        className="h-8 w-8 "
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z" />
                        <path fill="none" d="M0 0h24v24H0z" />
                      </svg>
                      immigration.biuro@gmail.com
                    </a>
                  </li>

                  {/* <!-- INSTAGRAM --> */}
                  <li className="w-full rounded-xl px-2 py-1 text-sm transition-all duration-300 hover:scale-110 hover:bg-slate-400">
                    <a href="/" className="flex items-center gap-1">
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 192 192"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          stroke="#fff"
                          strokeWidth="12"
                          d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="30"
                          stroke="#fff"
                          strokeWidth="12"
                        />
                        <circle cx="135" cy="57" r="9" fill="#fff" />
                      </svg>
                      @liberty-im
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
