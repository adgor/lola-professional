import React from "react";
import { CtaItem } from "./CtaItem";
import { useIntl } from "react-intl";

export const CtaLight = () => {
  const intl = useIntl();
  return (
    <CtaItem
      btnLink="#services"
      bgStyle="bg-brand-bg"
      titleStyle="text-brand-dark"
      ctaTitleFirst={intl.formatMessage({ id: "ourMissionTitle" })}
      ctaTitleSecond=""
      ctaDesc={intl.formatMessage({ id: "ourMissionDescription" })}
    />
  );
};
