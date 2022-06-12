import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import { getStars } from "../functions/getStars";

import skillData from "../assets/data/skillsData.json";
import { SkillsData, SkillType } from "../types/Skills";
import { Colors } from "../types/Colors";

const skills: SkillsData[] = skillData;
const codingSkills: SkillsData[] = skillData.filter(skill => skill.type === (SkillType.Coding));
const devopsSkills: SkillsData[] = skillData.filter(skill => skill.type === (SkillType.DevOps));
const socialSkills: SkillsData[] = skillData.filter(skill => skill.type === (SkillType.Social));

const SkillHeading = styled.p`
    text-align: left;
    font-size: 32px;
    margin: 12px 0;
`;

const SkillWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    margin: 6px 0;
`;

const SkillContent = styled.div`
    display: flex;
    flex-basis: 50%;
    padding: 0.25rem;
    border-radius: 6px;

    &:hover{
        box-shadow: ${Colors.secondBackground} 0px 0px 10px 5px;
    }
`

const Skills = (props: ChildrenProps) => {
    const sectionHeaderProps: SectionHeaderProps = {
        title: props.title,
        quote: props.quote,
        author: props.author,
    }
    
    return (
        <div className={props.styleHeader}>
            <SectionHeader {...sectionHeaderProps} />
            <div>
                <SkillHeading>Coding Skills</SkillHeading>
                <SkillWrapper>
                    {codingSkills.map((skill, i) => {
                        return(
                            <SkillContent>
                                <div className="flex basis-1/2">
                                    {skill.name}
                                </div>
                                {getStars(skill.value)}
                            </SkillContent>
                        )
                    })}
                </SkillWrapper>
            </div>
            <div>
                <SkillHeading>DevOps Skills</SkillHeading>
                <SkillWrapper>
                    {devopsSkills.map((skill, i) => {
                        return(
                            <SkillContent>
                                <div className="flex basis-1/2">
                                    {skill.name}
                                </div>
                                {getStars(skill.value)}
                            </SkillContent>
                        )
                    })}
                </SkillWrapper>
            </div>
            <div>
                <SkillHeading>Social Skills</SkillHeading>
                <SkillWrapper>
                    {socialSkills.map((skill, i) => {
                        return(
                            <SkillContent>
                                <div className="flex basis-1/2">
                                    {skill.name}
                                </div>
                                {getStars(skill.value)}
                            </SkillContent>
                        )
                    })}
                </SkillWrapper>
            </div>
        </div>
    )
}
 export default Skills;