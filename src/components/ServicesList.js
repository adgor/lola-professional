import React from "react";
import { Service } from "./Service";
import { StaticImage } from "gatsby-plugin-image";
// import { WebApps } from "./assets/WebApps";
import { useIntl } from "react-intl";

export const ServicesList = () => {
  const intl = useIntl();
  return (
    <section id="services">
      {/* Cleaning */}
      <Service
        serviceTitleFirst={intl.formatMessage({ id: "cleaningTitle" })}
        serviceTitleSecond=""
        serviceDesc={intl.formatMessage({ id: "cleaningDescription" })}
        btnColorStyle="bg-brand-secondary text-white"
        btnLink="/services/web"
        order="order-last ml-20"
      >
        <StaticImage
          src="../images/cleaning.jpg"
          alt="28 nentori hall"
          className="rounded"
          placeholder="tracedSVG"
        ></StaticImage>
      </Service>

      {/* maintenance */}
      <Service
        bgStyle="bg-brand-bg"
        serviceTitleFirst={intl.formatMessage({ id: "propertyTitle" })}
        serviceTitleSecond=""
        serviceDesc={intl.formatMessage({ id: "propertyDescription" })}
        btnColorStyle="bg-brand-secondary text-white"
        btnLink="/services/design"
      >
        <StaticImage
          src="../images/property.jpg"
          alt="28 nentori hall"
          className="rounded"
          placeholder="tracedSVG"
        ></StaticImage>
      </Service>

      {/* relocation */}
      <Service
        serviceTitleFirst={intl.formatMessage({ id: "relocationTitle" })}
        serviceTitleSecond=""
        serviceDesc={intl.formatMessage({ id: "relocationDescription" })}
        btnColorStyle="bg-brand-secondary text-white"
        btnLink="/services/web"
        order="order-last ml-20"
      >
        <StaticImage
          src="../images/relocation.jpg"
          alt="28 nentori hall"
          className="rounded"
          placeholder="tracedSVG"
        ></StaticImage>
      </Service>

      {/* waste */}
      <Service
        bgStyle="bg-brand-bg"
        serviceTitleFirst={intl.formatMessage({ id: "wasteTitle" })}
        serviceTitleSecond=""
        serviceDesc={intl.formatMessage({ id: "wasteDescription" })}
        btnColorStyle="bg-brand-secondary text-white"
        btnLink="/services/design"
      >
        <StaticImage
          src="../images/5.jpg"
          alt="28 nentori hall"
          className="rounded"
          placeholder="tracedSVG"
        ></StaticImage>
      </Service>
    </section>
  );
};
