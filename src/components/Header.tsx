import React from "react";
import styled from "styled-components"

const Text = styled.p`
    padding: 0.5rem;
    color: white;
    font-size: xx-large;
    font-weight: 800;
`

export const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center m-auto w-screen h-screen divide-y-2 bg-me bg-cover bg-center">
            <Text className="flex">
                Robin Leber  
            </Text>
            <Text className="flex">
                an interactive resume
            </Text>
        </div>
    )
}