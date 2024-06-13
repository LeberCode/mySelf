import React from "react";
import styled from "styled-components";
import { ExpandMore } from "@material-ui/icons";

const Text = styled.h1`
  padding: 0.5rem;
  color: white;
  font-size: xx-large;
  font-weight: 800;
`;

const Header = () => {
  return (
    <div className="w-screen h-screen lg:bg-heroForHeader bg-heroForMobile bg-cover bg-center bg-scroll lg:bg-fixed z-0 bg-no-repeat">
      {/* Foto von Erik Mclean von Pexels: https://www.pexels.com/de-de/foto/spielzeug-superheld-nahe-laptop-auf-tisch-zu-hause-4048093/ */}
      <div className="flex justify-center w-screen h-screen bg-signal bg-opacity-50 relative">
        <div className="flex flex-col justify-center items-center divide-y-2">
          <Text>Robin Leber</Text>
          <Text>an interactive resume</Text>
        </div>
        <div
          className="absolute bottom-0 right-8 w-20 h-10 bg-white text-center rounded-t-sm cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ExpandMore
            className="text-signal animate-bounce mt-1"
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
