import React from "react";
import { useInView } from "react-intersection-observer";
const Contacts = () => {
  const { ref: contactRef, inView: contactIsVisible } = useInView({
    threshold: 0,
  });

  return (
    <>
      <section id="contacts" className="container mx-auto pb-32 text-gray-800">
        <div className="relative overflow-hidden ">?</div>
        <div className="container px-4 text-gray-800 md:px-12">
          <div className="block overflow-hidden rounded-xl bg-white/80 px-2 py-10 shadow-lg md:py-12 md:px-6">
            <div
              ref={contactRef}
              className={`${
                contactIsVisible ? "animate-fadeInDown animate-delay-500" : ""
              } flex flex-wrap `}
            >
              <div
                className={`mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:px-6 xl:mb-0 xl:w-5/12`}
              >
                <form name="contact" method="POST" data-netlify="true">
                  <div className="form-group mb-6">
                    <h3 className="pb-5 text-center text-3xl font-bold text-slate-800 md:text-left lg:text-4xl">
                      Запис на консультацію:
                    </h3>
                    <input
                      type="text"
                      name="name"
                      className="form-control m-0 block w-full rounded-xl border border-solid border-gray-300 bg-white/80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-sky-600 focus:bg-white/80 focus:text-gray-700 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Ім'я"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control m-0 block w-full rounded-xl border border-solid border-gray-300 bg-white/80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-sky-600 focus:bg-white/80 focus:text-gray-700 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Електрона пошта"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      name="message"
                      className=" form-control m-0 block w-full rounded-xl border border-solid border-gray-300 bg-white/80 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-sky-600 focus:bg-white/80 focus:text-gray-700 focus:outline-none "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Повідомлення"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" w-full rounded-xl bg-sky-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg"
                  >
                    Надіслати
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
                <h3 className="pb-5 pl-5 text-center text-3xl font-bold text-slate-800 md:text-left lg:text-4xl">
                  {" "}
                  Контакти:
                </h3>
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 lg:px-6">
                    <div className="flex items-start">
                      <a href="tel:+48 517 603 660">
                        <div className="shrink-0">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-600 p-4 shadow-md hover:bg-sky-400">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="headset"
                              className="w-5 text-white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">Телефон:</p>
                        <p className="text-gray-500">
                          <a href="tel:+48 517 603 660">+48 517 603 660</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 lg:px-6">
                    <div className="flex items-start">
                      <a href="https://www.instagram.com/liberty-immigration/">
                        <div className="shrink-0">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-600 p-4 shadow-md hover:bg-sky-400">
                            <svg
                              className="h-8 w-8"
                              viewBox="0 0 192 192"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                            >
                              <path
                                stroke="#fff"
                                stroke-width="12"
                                d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                              />
                              <circle
                                cx="96"
                                cy="96"
                                r="30"
                                stroke="#fff"
                                stroke-width="12"
                              />
                              <circle cx="135" cy="57" r="9" fill="#fff" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">Наш Instagram:</p>
                        <p className="text-gray-500">
                          <a href="https://www.instagram.com/liberty-immigration/">
                            @liberty-im
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
                    <div className="align-start flex">
                      <a href="mailto:immigration.biuro@gmail.com">
                        <div className="shrink-0">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-600 p-4 shadow-md hover:bg-sky-400">
                            <svg
                              className="stroke-fill-200 h-8 w-8 fill-slate-200 text-slate-200"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z" />
                              <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">Електрона пошта:</p>
                        <p className="text-xs text-gray-500 md:text-lg ">
                          <a href="mailto:immigration.biuro@gmail.com">
                            immigration.biuro@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
