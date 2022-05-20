import React from "react";

export default function Paragraph({ text }) {
  return (
    <p className="text-base font-normal leading-relaxed text-brand-dark">
      {text}
    </p>
  );
}
