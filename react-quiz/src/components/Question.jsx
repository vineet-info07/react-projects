import React from "react";
import Options from "./Options";

export default function Question({ question }) {
  console.log(question);
  const { question: questions, options } = question;
  return (
    <div>
      <h4>{questions}</h4>
      <Options options={options} />
    </div>
  );
}
