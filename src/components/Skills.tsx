import { ChildrenProps } from "../interfaces/childrenProps";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import { getStars } from "../functions/getStars";

import skillData from "../assets/data/skillsData.json";
import { SkillsData, SkillType } from "../types/Skills";
import { Colors } from "../types/Colors";

const skills: SkillsData[] = skillData;
const codingSkills: SkillsData[] = skillData
  .filter((skill) => skill.type === SkillType.Coding)
  .sort((a, b) => b.value - a.value);
const otherSkills: SkillsData[] = skillData
  .filter((skill) => skill.type === SkillType.Other)
  .sort((a, b) => b.value - a.value);
const socialSkills: SkillsData[] = skillData
  .filter((skill) => skill.type === SkillType.Social)
  .sort((a, b) => b.value - a.value);
const languagelSkills: SkillsData[] = skillData
  .filter((skill) => skill.type === SkillType.Language)
  .sort((a, b) => b.value - a.value);

const SkillHeading = styled.p`
  text-align: left;
  font-size: 32px;
  margin: 12px 0;
  font-weight: 300;
`;

const SkillWrapper = styled.div`
  margin: 6px 0;
  color: ${Colors.black};

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SkillContent = styled.div`
  display: flex;
  flex-basis: 50%;
  padding: 0.25rem;
  border-radius: 6px;

  &:hover {
    box-shadow: ${Colors.secondBackground} 0px 0px 10px 5px;
  }
`;

const Skills = (props: ChildrenProps) => {
  const sectionHeaderProps: SectionHeaderProps = {
    title: props.title,
    quote: props.quote,
    author: props.author,
  };

  return (
    <div className={props.styleHeader}>
      <SectionHeader {...sectionHeaderProps} />
      <div className="px-2">
        <SkillHeading>Coding Skills</SkillHeading>
        <SkillWrapper>
          {codingSkills.map((skill) => {
            return (
              <SkillContent>
                <div className="flex basis-1/2">{skill.name}</div>
                {getStars(skill.value)}
              </SkillContent>
            );
          })}
        </SkillWrapper>
      </div>
      <div className="px-2">
        <SkillHeading>Other Skills</SkillHeading>
        <SkillWrapper>
          {otherSkills.map((skill) => {
            return (
              <SkillContent>
                <div className="flex basis-1/2">{skill.name}</div>
                {getStars(skill.value)}
              </SkillContent>
            );
          })}
        </SkillWrapper>
      </div>
      <div className="px-2">
        <SkillHeading>Languages</SkillHeading>
        <SkillWrapper>
          {languagelSkills.map((skill) => {
            return (
              <SkillContent>
                <div className="flex basis-1/2">{skill.name}</div>
                {getStars(skill.value)}
              </SkillContent>
            );
          })}
        </SkillWrapper>
      </div>
      <div className="px-2">
        <SkillHeading>Social Skills</SkillHeading>
        <SkillWrapper>
          {socialSkills.map((skill) => {
            return (
              <SkillContent>
                <div className="flex basis-1/2">{skill.name}</div>
                {getStars(skill.value)}
              </SkillContent>
            );
          })}
        </SkillWrapper>
      </div>
    </div>
  );
};
export default Skills;
