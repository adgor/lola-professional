import React from "react";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// TODO: update current data
const socialLinks = [
  {
    twitter: "#!",
    facebook: "#!",
    instagram: "#!",
  },
];

export const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  const intl = useIntl();

  return (
    <div className=" bg-paleSky-50">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <LocalizedLink
              href="#!"
              to="/"
              aria-label={intl.formatMessage({ id: "name" })}
              title={intl.formatMessage({ id: "name" })}
              className="inline-flex items-center"
            >
              <span
                className=" text-xl font-bold tracking-wide uppercase  text-biscay-500">
                {intl.formatMessage({ id: "name" })}
                logo
              </span>
            </LocalizedLink>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
            >
              <FaPhone className="mr-1 text-biscay-500" />
              add numer
            </a>

            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
            >
              <FaEnvelope className="mr-1 text-biscay-500 " />
              add email
            </a>

            <a
              href="https://www.google.com/maps/place/Kon.+Fabiolapark+100,+9100+Sint-Niklaas/@51.1551892,4.1563142,19.82z/data=!4m5!3m4!1s0x47c38c29b032affd:0xf1579c4ba39742c7!8m2!3d51.1551505!4d4.15651"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
            >
              <FaMapMarkerAlt className="mr-1 text-biscay-500 " />
        LOLA Professional B.V.    
            </a>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>

            {socialLinks.map((socialLink, index) => (
              <div key={index} className="flex items-center mt-1 space-x-3">
                <a
                  href={socialLink.twitter}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
                >
                  <FaTwitter className="w-6 h-6 " />
                </a>
                <a
                  href={socialLink.facebook}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  <FaFacebook className="w-6 h-6 " />
                </a>
                <a href={socialLink.instagram}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-ceriseRed-500 "
                >
                  <FaInstagram className="w-6 h-6 " />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright {getYear()} LOLA Professional B.V., All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
