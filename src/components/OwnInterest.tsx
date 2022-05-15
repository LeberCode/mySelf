import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";

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
                Interessen
            </div>
        </div>
    )
}

export default OwnInterest;