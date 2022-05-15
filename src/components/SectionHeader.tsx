import React from "react";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";

const SectionHeader = (props: SectionHeaderProps) => {
    return(
        <div>
            <div className="text-5xl">
                {props.title}
            </div>
            <div className="text-black py-8">
                <p className="italic">"{props.quote}"</p> - {props.author}
            </div>
        </div>
    )
}

export default SectionHeader;