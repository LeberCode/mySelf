import React from "react";
import { Education } from "../types/Education";
import { PinDrop, Link } from '@material-ui/icons';
import { shortenLink } from "../functions/shortenLink";

const EducationStep = (props: Education) => {
    return (
        <div className="lg:flex flex-row text-left lg:my-6 my-12 p-4 text-black rounded-md lg:shadow-none shadow-customWhite lg:hover:shadow-customWhite divide-y-2 divide-white lg:divide-none">
            <div className="basis-1/2 flex flex-col shadow-b-lg lg:mb-0 mb-1">
                <p className="text-lg font-semibold">
                    {props.institution}
                </p>
                <p>
                    {props.periodStart} - {props.periodEnd}
                </p>
            </div>
            <div className="basis-1/2 flex flex-col">
                <p className="text-lg font-semibold lg:mt-0 mt-1">
                    {props.degree}
                </p>
                <p className="italic">
                    {props.grade}
                </p>
                <p className="py-2 text-justify">
                    {props.description}
                </p>
                <div className="flex divide-x-2 divide-signal text-signal">
                    <div className="pr-2 flex items-center">
                        <PinDrop className="mr-1"/>
                        <p>{props.location.city}, {props.location.country}</p>
                    </div>
                    <div className="pl-2 flex items-center">
                        <Link className="mr-1"/>
                        <div>
                            <a href={props.link} target="_blank" rel="noreferrer">
                                <p>{shortenLink(props.link)}</p>
                            </a>
                            {props.link2 ?
                                <a href={props.link2} target="_blank" rel="noreferrer">
                                    <p>{shortenLink(props.link2)}</p>
                                </a>
                            : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationStep;