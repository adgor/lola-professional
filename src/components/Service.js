import React from "react";
import Btn from "./Btn";

export const Service = ({
  bgStyle,
  serviceTitleFirst,
  serviceTitleSecond,
  serviceDesc,
  btnColorStyle,
  btnLink,
  order,
  children,
}) => {
  return (
    <section className={`${bgStyle}`}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid items-center gap-5 row-gap-8 lg:grid-cols-2">
          <div className={`flex flex-col justify-center ${order}`}>
            <div className="max-w-xl mb-8  text-brand-dark">
              <h2 className="max-w-lg mb-4 font-sans text-2xl font-bold leading-9 sm:text-3xl">
                {serviceTitleFirst}
                <br />
                {serviceTitleSecond}
              </h2>
              <p className="  text-base leading-6  ">{serviceDesc}</p>
            </div>
            <div>
              <Btn link={btnLink} btnColorStyle={btnColorStyle} />
            </div>
          </div>
          <div className=" overflow-hidden relative  object-cover w-full h-56 rounded shadow-lg sm:h-96">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
