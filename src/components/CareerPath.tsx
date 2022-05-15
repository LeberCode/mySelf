import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";

const CareerPath = (props: ChildrenProps) => {
    const sectionHeaderProps: SectionHeaderProps = {
        title: props.title,
        quote: props.quote,
        author: props.author,
    }

    return(
        <div className={props.styleHeader}>
            <SectionHeader {... sectionHeaderProps}/>
            <div>
                Kariere
            </div>
        </div>
    )
}

export default CareerPath;