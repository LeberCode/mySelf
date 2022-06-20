import React, {useState} from "react";
import styled from "styled-components";

import SectionHeader from "./SectionHeader";

import { Person, About } from "../types/Profile"
import { ChildrenProps } from '../interfaces/childrenProps';
import { Colors } from "../types/Colors";

import data from "../assets/data/profileInfoData.json";
import { SectionHeaderProps } from "../interfaces/sectionHeaderProps";
import meProf from "../assets/images/meProf.jpg";

const person: Person = data.person;
const aboutLorem: About = data.aboutLorem;
const aboutMe: About = data.aboutMe;

const getAge = (dateString: string) => {
    const today = new Date();
    const bday = new Date(dateString);
    let age = today.getFullYear() - bday.getFullYear();
    var month = today.getMonth() - bday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < bday.getDate())) 
    {
        age--;
    }
    return age;
}


const Profile = (props: ChildrenProps) => {
    const [about, setAbout] = useState(false);

    const sectionHeaderProps: SectionHeaderProps = {
        title: props.title,
        quote: props.quote,
        author: props.author,
    }

    return (
        // Wrapper
        <div className={props.styleHeader}>
            <SectionHeader {...sectionHeaderProps}/>
            <div className="lg:flex flex-row flex-grow py-8 text-left">
                {/* about */}
                <div className="flex-1 p-4">
                    <div className="text-3xl pb-8">
                        About me
                    </div>
                    <div className="text-black bg-white rounded-lg p-2 min-w-fit shadow-md shadow-signal" onMouseOver={() => setAbout(!about)} onMouseLeave={() => setAbout(!about)}>
                        {about ? aboutMe: aboutLorem}
                    </div>
                </div>
                {/* picture */}
                <div className="flex-1 p-4">
                        <img src={meProf} className="rounded-lg shadow-md shadow-signal" />
                </div>
                {/* info */}
                <div className="flex-1 p-4">
                    <div className="text-3xl pb-8">
                        Info
                    </div>
                    <div className="text-black bg-white rounded-lg p-2 max-w-fit shadow-md shadow-signal rotate-180 transition hover:rotate-0 duration-300">
                        <p className="font-semibold">
                            Name:
                        </p>
                        <p className="pb-4">
                            {person.firstName} {person.lastName}
                        </p>
                        <p className="font-semibold">
                            Age:
                        </p>
                        <p className="pb-4">
                            {getAge(person.dateOfBirth)} years
                        </p>
                        <p className="font-semibold">
                            Location:
                        </p>
                        <p>
                            {person.city}, {person.country}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;