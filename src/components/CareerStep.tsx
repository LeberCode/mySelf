import { Career } from "../types/Career";
import { PinDrop, Link } from "@mui/icons-material";
import { shortenLink } from "../functions/shortenLink";

const CareerStep = (props: Career) => {
  return (
    <div className="lg:flex flex-row text-left lg:my-6 my-12 p-4 text-black rounded-md lg:shadow-none shadow-customWhite lg:hover:shadow-customWhite divide-y-2 divide-white lg:divide-none">
      <div className="basis-1/2 flex flex-row mb-1 lg:mb-0 justify-between">
        <div>
          <p className="text-lg font-semibold">{props.company}</p>
          <p>
            {props.periodStart} - {props.periodEnd}
          </p>
        </div>
        <div>
          {props.logo && (
            <img
              className="m-4 mr-32"
              height={"120px"}
              width={"120px"}
              src={props.logo}
            />
          )}
        </div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <p className="text-lg font-semibold mt-1 lg:mt-0">
          {props.employmentType}
          {props.profession === "" ? "" : `: ${props.profession}`}
        </p>
        <p className="italic text-sm">
          {props.keywords.map((keyword, i) => {
            let returnVal;
            i < props.keywords.length - 1
              ? (returnVal = `${keyword} | `)
              : (returnVal = `${keyword}`);
            return returnVal;
          })}
        </p>
        <p className="py-2 text-justify">{props.description}</p>
        <div className="flex divide-x-2 divide-signal text-signal overflow-hidden">
          <div className="pr-2 flex items-center">
            <PinDrop className="mr-1" />
            {props.location.city}, {props.location.country}{" "}
            {props.remote ? "(remote)" : null}
          </div>
          <div className="pl-2 flex items-center">
            <Link className="mr-1" />
            <a href={props.link} target="_blank" rel="noreferrer">
              {shortenLink(props.link)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerStep;
