import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { HiMenu } from "react-icons/hi";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";
import "../common.css";

const services = [
  {
    title: "clean",
    path: "/clean",
    id: "1",
  }
];

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const intl = useIntl();
  return (
    <div className=" bg-red-500">
      <nav className="flex flex-wrap items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex items-center flex-shrink-0 text-white">
          <LocalizedLink
            to="/"
            aria-label={intl.formatMessage({ id: "name" })}
            title={intl.formatMessage({ id: "name" })}
            className="inline-flex items-center mr-8"
          >
{/* logo */}
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              {intl.formatMessage({ id: "name" })}
            </span>
          </LocalizedLink>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="inline-flex items-center justify-center p-2 rounded-md text-biscay-400 bg-biscay-800 hover:text-white hover:bg-biscay-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-biscay-800 focus:ring-white"
          >
            <HiMenu className="block w-6 h-6 text-white" />
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="flex flex-col items-baseline -ml-3 md:space-x-2 sm:flex-row lg:flex-grow">
             



 <ul className="flex items-center hidden space-x-2 lg:flex">
              
             <li>
                <LocalizedLink
                  href="/"
                  aria-label={intl.formatMessage({ id: "home" })}
                  title={intl.formatMessage({ id: "home" })}
                  className="px-3 py-2 text-sm font-medium capitalize tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
                >

                {intl.formatMessage({ id: "home" })}
                </LocalizedLink>
              </li> 

              <li className="relative px-3 py-2 text-sm capitalize font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md cursor-pointer group dropdown hover:bg-gray-700 hover:text-white">
                <span> {intl.formatMessage({ id: "services" })}</span>
                <div className="absolute z-50 hidden h-auto py-3 -ml-3 group-hover:block dropdown-menu">
                  <div className="inline-block w-16 ml-6 -mb-2 overflow-hidden">
                    <div className="w-3 h-3 origin-bottom-left transform rotate-45 bg-gray-700 "></div>
                  </div>
                  <ul className="top-0 grid w-auto grid-flow-col grid-rows-6 gap-6 px-6 py-8 bg-gray-700 rounded shadow">
            {services.map((service) => (
                        <li>
              <LocalizedLink
                key={service.id}
                to={service.path}
               // activeStyle="bg-red-400"
                 activeClassName="active"
                // className={`px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white  ${
                //   "!active" ? "bg-red-400" : "bg-biscay-100"
                // }`}
                className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white active:bg-biscay-400"
              >
                {intl.formatMessage({ id: service.title })}
              </LocalizedLink>
              </li>
            ))}
                  </ul>
                </div>
              </li>
 
             <li>
                <LocalizedLink

                  to="/about"
                  aria-label={intl.formatMessage({ id: "aboutUs" })}
                  title={intl.formatMessage({ id: "aboutUs" })}
                  className="px-3 py-2 capitalize text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
                >
                                  {intl.formatMessage({ id: "about" })}

                </LocalizedLink>
              </li> 
                           <li>
                <LocalizedLink

                  to="/contact"
                  aria-label={intl.formatMessage({ id: "contactUs" })}
                  title={intl.formatMessage({ id: "contactUs" })}
                  className="px-3 py-2 capitalize text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
                >
                                  {intl.formatMessage({ id: "contact" })}

                </LocalizedLink>
              </li> 

            </ul>




          </div>
          <div className="flex items-center pt-2 mt-4 border-t border-paleSky-700 lg:border-t-0 lg:pt-0 lg:mt-0">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
