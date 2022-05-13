import React, {useState} from "react";
import styled from "styled-components";

import {Person, About} from "../types/Profile"
import data from "../assets/data/profileInfoData.json";

import {ChildrenProps} from '../interfaces/childrenProps';
import { Colors } from "../types/Colors";

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
    return (
        // Wrapper
        <div className={`${props.style} divide-y-8 divide-signal`}>
            {/* header */}
            <div>
                <div className="text-5xl">
                    Profile
                </div>
                <div className="text-black py-8">
                    "Das hab ich alles mit React und TypeScript gemacht" - Robin Leber 
                    {/* Muss noch in data */}
                </div>
            </div>
            <div className="flex flex-row flex-grow py-8 text-left">
                {/* aboutLorem */}
                <div className="flex-1 px-4">
                    <div className="text-3xl pb-8">
                        About me
                    </div>
                    <div className="text-black bg-secondBackground rounded-lg p-2 max-w-fit shadow-md shadow-signal" onMouseOver={() => setAbout(!about)} onMouseLeave={() => setAbout(!about)}>
                        {about ? aboutMe: aboutLorem}
                    </div>
                </div>
                {/* picture */}
                <div className="flex-1">
                    <div className="bg-myShadow hover:bg-meProf w-full h-full bg-cover bg-center rounded-full shadow-lg scale-90 shadow-secondBackground transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"/>
                </div>
                {/* info */}
                <div className="flex-1 px-4">
                    <div className="text-3xl pb-4">
                        Info
                    </div>
                    <div className="text-black bg-secondBackground rounded-lg p-2 max-w-fit shadow-md shadow-signal rotate-12 m-4 ml-8 mt-0 transition hover:rotate-0 duration-700">
                        <p className="font-bold">
                            Name:
                        </p>
                        <p className="pb-4">
                            {person.firstName} {person.lastName}
                        </p>
                        <p className="font-bold">
                            Age:
                        </p>
                        <p className="pb-4">
                            {getAge(person.dateOfBirth)} years
                        </p>
                        <p className="font-bold">
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