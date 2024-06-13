import React from "react";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div>
      <h2 className="text-5xl">{props.title}</h2>
      <div className="text-black py-8">
        <p className="italic">"{props.quote}"</p> - {props.author}
      </div>
    </div>
  );
};

export default SectionHeader;
