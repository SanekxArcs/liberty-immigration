import React from "react";

export default function Partners() {
  return (
    <>
      <section className="container mx-auto hidden px-5 md:block" id="PARTNERS">
        <div className="container flex flex-col items-center py-5 text-4xl font-light uppercase text-slate-200">
          <h2 className="">Фірми з якими співпрацюємо:</h2>
          <div className="mb-10 text-start">
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="inline-block h-1 w-64 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-slate-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-slate-500"></span>
          </div>
          <div className="flex justify-between gap-10 py-10">
            <div>
              <img
                className="h-10 transition-all hover:scale-110"
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a395a12aaf3_logo-01.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-10 transition-all hover:scale-110"
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a411512aaf4_logo-04.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-10 transition-all hover:scale-110"
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a3cd712aaf6_logo-05.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-10 transition-all hover:scale-110"
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a85fd12aaf5_logo-08.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
