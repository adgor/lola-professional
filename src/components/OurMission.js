import React from "react";
import { useIntl } from "react-intl";
import Title from './typography/Title.js'
import Paragraph from './typography/Paragraph.js'

export default function OurMission() {
   const intl = useIntl();
  return (
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="flex flex-col lg:flex-row">
    <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <Title text={intl.formatMessage({ id: "ourMissionTitle" })}  />
    </div>
    <div class="lg:w-1/2">

          <Paragraph text={intl.formatMessage({ id: "ourMissionDescription" })}  />
    </div>
  </div>
</div>
  );
}
