import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";
import meSport from "../assets/images/meSport.jpeg";
import meHexe from "../assets/images/27-Leber-schmuck.jpg";
import meReisen2 from "../assets/images/Reisen2.jpeg";
import meReisen3 from "../assets/images/Reisen3.jpeg";
import meReisenPano from "../assets/images/ReisenPano.jpeg";
import { Link } from '@material-ui/icons';
import data from '../assets/data/interestData.json';
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
    }

    return (
        <div className={props.styleHeader}>
            <SectionHeader {...sectionHeaderProps} />
            <div>
                {
                    interests.map( (interest:Interest, index ) => {
                        return(
                            <div className={`
                                flex h-80 bg-white m-4 mt-8 max-w-fit min-w-fit text-left relative
                                transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                                ${index % 2 === 0 ? "float-left rounded-l-lg" : "float-right rounded-r-lg"}
                            `}>
                                { index % 2 === 0 ? <img src={mapPictures.get(index+1)} alt="Volleyball" className="w-96 rounded-l-lg object-cover"/> : null}
                                <div className="p-4 w-80 text-black">
                                    <p className="font-semibold text-xl">
                                        {interest.title}
                                    </p>
                                    <div className="pt-2 text-black">
                                        <p>
                                            {interest.description}
                                        </p>
                                    </div>
                                    {
                                        interest.link ? 
                                        <div className="text-signal absolute bottom-0 pb-2">
                                            <Link className="pb-1 mr-1"/>
                                            <a href={interest.link} target="_blank" rel="noreferrer">
                                                {interest.link}
                                            </a>
                                        </div>
                                        : null
                                    }
                                </div>
                                { index % 2 === 1 ? <img src={mapPictures.get(index+1)} alt="Volleyball" className="w-96 rounded-r-lg object-cover"/> : null}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OwnInterest;