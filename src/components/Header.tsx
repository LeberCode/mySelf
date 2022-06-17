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
        <div className="w-screen h-screen bg-heroForHeader bg-cover bg-center bg-fixed z-0 bg-no-repeat">
        {/* Foto von Erik Mclean von Pexels: https://www.pexels.com/de-de/foto/spielzeug-superheld-nahe-laptop-auf-tisch-zu-hause-4048093/ */}
            <div className="flex flex-col justify-center items-center m-auto w-screen h-screen bg-signal opacity-70 divide-y-2">
                <Text className="flex">
                    Robin Leber  
                </Text>
                <Text className="flex">
                    an interactive resume
                </Text>
            </div>
        </div>
    )
}

export default Header;