import React from "react";
import { Education } from "../types/Education";
import { PinDrop, Link } from '@material-ui/icons';
import { shortenLink } from "../functions/shortenLink";

const EducationStep = (props: Education) => {
    return (
        <div className="flex flex-row text-left my-6 text-black">
            <div className="basis-1/2 flex flex-col">
                <p className="text-lg font-semibold">
                    {props.institution}
                </p>
                <p>
                    {props.periodStart} - {props.periodEnd}
                </p>
            </div>
            <div className="basis-1/2 flex flex-col">
                <p className="text-lg font-semibold">
                    {props.degree}
                </p>
                <p className="italic">
                    {props.grade}
                </p>
                <p>
                    {props.description}
                </p>
                <div className="flex divide-x-2 divide-signal text-signal">
                    <div className="pr-2">
                        <PinDrop className="pb-1 mr-1"/>
                        {props.location.city}, {props.location.country}
                    </div>
                    <div className="pl-2">
                        <Link className="pb-1 mr-1"/>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            {shortenLink(props.link)}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationStep;