import { Career } from "../types/Career";
import { PinDrop, Link } from '@material-ui/icons';
import { shortenLink } from "../functions/shortenLink";

const CareerStep = (props: Career) => {
    return (
        <div className="flex flex-row text-left my-6 p-4 text-black rounded-md hover:shadow-customWhite">
            <div className="basis-1/2 flex flex-col">
                <p className="text-lg font-semibold">
                    {props.company}
                </p>
                <p>
                    {props.periodStart} - {props.periodEnd}
                </p>
            </div>
            <div className="basis-1/2 flex flex-col">
                <p className="text-lg font-semibold">
                    {props.employmentType} {props.profession === "" ? "" : `: ${props.profession}`}
                </p>
                <p className="italic text-sm">
                    {props.keywords.map((keyword, i) => {
                        let returnVal;
                        i < props.keywords.length-1 ? returnVal = `${keyword} | ` : returnVal = `${keyword}`;
                        return returnVal;
                    })}
                </p>
                <p className="py-2">
                    {props.description}
                </p>
                <div className="flex divide-x-2 divide-signal text-signal">
                    <div className="pr-2">
                        <PinDrop className="pb-1 mr-1"/>
                        {props.location.city}, {props.location.country} {props.remote ? "(remote)": null}
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

export default CareerStep;