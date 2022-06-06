import React from "react";
import { useIntl } from "react-intl";

export const ContactHero = () => {
  const intl = useIntl();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-2xl lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              {intl.formatMessage({ id: "contactTitle" })}
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              {intl.formatMessage({ id: "contactDescription" })}
            </p>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2"></div>
    </div>
  );
};
