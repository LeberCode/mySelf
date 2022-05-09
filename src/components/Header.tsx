import React from "react";
import styled from "styled-components"

const Text = styled.p`
    padding: 0.5rem;
    color: white;
    font-size: xx-large;
    font-weight: 800;
`

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center m-auto w-screen h-screen divide-y-2 bg-heroForHeader bg-cover bg-center">
        {/* Foto von Erik Mclean von Pexels: https://www.pexels.com/de-de/foto/spielzeug-superheld-nahe-laptop-auf-tisch-zu-hause-4048093/ */}
            <Text className="flex">
                Robin Leber  
            </Text>
            <Text className="flex">
                an interactive resume
            </Text>
        </div>
    )
}

export default Header;