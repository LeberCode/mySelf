import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";
import { LinkedIn, Laptop, PhotoCamera, People } from "@mui/icons-material";

const Contact = (props: ChildrenProps) => {
  const sectionHeaderProps: SectionHeaderProps = {
    title: props.title,
    quote: props.quote,
    author: props.author,
  };
  return (
    <div className={props.styleHeader}>
      <SectionHeader {...sectionHeaderProps} />
      <div className="lg:flex flex-row justify-around text-left p-4 text-black">
        <div>
          <p className="text-3xl font-light text-signal lg:mb-12 mb-4">
            Contact Me
          </p>
          <div className="text-signal mb-8 lg:mb-0">
            <div className="mb-6">
              <a
                href="https://www.linkedin.com/in/robin-leber-352b921a1/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn className="mr-1" />
                LinkedIn
              </a>
            </div>
            <div>
              <a
                href="https://www.xing.com/profile/Robin_Leber4/cv"
                target="_blank"
                rel="noreferrer"
              >
                <People className="mr-1" />
                Xing
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl font-light text-signal lg:mb-12 mb-4">
            Acknowledgements
          </p>
          <div className="text-signal ">
            <div className="mb-6">
              <a
                href="http://www.pascalvangemert.nl/"
                target="_blank"
                rel="noreferrer"
              >
                <Laptop className="mr-1" />
                Pascal Vangemert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
