import SectionHeader from "./SectionHeader";
import EducationStep from "./EducationStep";
import CareerStep from "./CareerStep";

import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import { Education } from "../types/Education";
import { Career } from "../types/Career";

import educationData from "../assets/data/educationData.json";
import careerData from "../assets/data/careerData.json";

const education: Education[] = educationData;
const career: Career[] = careerData;

const CareerPath = (props: ChildrenProps) => {
  const sectionHeaderProps: SectionHeaderProps = {
    title: props.title,
    quote: props.quote,
    author: props.author,
  };

  return (
    <div className={props.styleHeader}>
      <SectionHeader {...sectionHeaderProps} />
      <div className="px-2">
        <p className="text-3xl font-light text-left my-4">Career</p>
        {career
          .slice(0)
          .reverse()
          .map((step) => {
            return <CareerStep {...step} />;
          })}
      </div>
      <div className="px-2">
        <p className="text-3xl font-light text-left my-4">Education</p>
        {education
          .slice(0)
          .reverse()
          .map((step) => {
            return <EducationStep {...step} />;
          })}
      </div>
    </div>
  );
};

export default CareerPath;
