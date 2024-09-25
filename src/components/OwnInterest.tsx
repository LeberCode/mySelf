import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";
import meSport from "../assets/images/meSport.jpeg";
import meHexe from "../assets/images/27-Leber-schmuck.jpg";
import meReisen3 from "../assets/images/Reisen3.jpeg";
import ReisenTrolltunga from "../assets/images/ReisenTrolltunga.jpeg";
import { Link } from "@mui/icons-material";
import data from "../assets/data/interestData.json";
import { Interest } from "../types/Interest";

const mapPictures = new Map();

mapPictures.set(1, meSport);
mapPictures.set(2, meHexe);
mapPictures.set(3, meReisen3);

const interests: Interest[] = data;

const OwnInterest = (props: ChildrenProps) => {
  const sectionHeaderProps: SectionHeaderProps = {
    title: props.title,
    quote: props.quote,
    author: props.author,
  };

  return (
    <div className={props.styleHeader}>
      <SectionHeader {...sectionHeaderProps} />
      <div>
        {interests.map((interest: Interest, index) => {
          return (
            <div
              className={`
                                lg:flex h-fit bg-white m-4 mt-8 max-w-fit min-w-fit text-left relative rounded-lg mx-auto lg:mx-16
                                transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                                ${
                                  index % 2 === 0
                                    ? "lg:float-left lg:rounded-l-lg"
                                    : "lg:float-right lg:rounded-r-lg 4k:float-left"
                                }
                            `}
            >
              <img
                src={mapPictures.get(index + 1)}
                alt="Image of interest."
                className={`w-96 object-cover order-first rounded-t-lg
                                        ${
                                          index % 2 === 0
                                            ? "lg:order-first lg:rounded-none lg:rounded-l-lg"
                                            : "lg:order-last lg:rounded-none lg:rounded-r-lg 4k:order-first 4k:rounded-none 4k:rounded-l-lg"
                                        }`}
              />
              <div className="p-4 w-80 text-black">
                <p className="font-semibold text-xl">{interest.title}</p>
                <div className="pt-2 text-black mb-12">
                  <ul className="list-disc pl-4">
                    {interest.description.map((descriptionPart) => {
                      return <li className="p-2">{descriptionPart}</li>;
                    })}
                  </ul>
                </div>
                {interest.link ? (
                  <div className="text-signal absolute bottom-0 pb-2">
                    <a href={interest.link} target="_blank" rel="noreferrer">
                      <Link className="pb-1 mr-1" />
                      {interest.link}
                    </a>
                  </div>
                ) : (
                  <div className="-mt-12" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OwnInterest;
