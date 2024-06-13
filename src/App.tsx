import styled from "styled-components";

import Header from "./components/Header";
import Profile from "./components/Profile";
import CareerPath from "./components/CareerPath";
import Skills from "./components/Skills";
import OwnInterest from "./components/OwnInterest";
import Contact from "./components/Footer";

import { ChildrenProps } from "./interfaces/childrenProps";
import { Colors } from "./types/Colors";

import quotesData from "./assets/data/quotesData.json";

const Wrapper = styled.div`
  overflow-x: scroll;
`;
let profileProps: ChildrenProps = {
  styleHeader: "xl:mx-48 lg:mx-6 mx-2 divide-y-8 divide-signal",
  title: quotesData.quotes[0].section,
  quote: quotesData.quotes[0].quote,
  author: quotesData.quotes[0].author,
};
let careerProps: ChildrenProps = {
  styleHeader: "xl:mx-48 lg:mx-6 mx-2 divide-y-8 divide-signal",
  title: quotesData.quotes[1].section,
  quote: quotesData.quotes[1].quote,
  author: quotesData.quotes[1].author,
};
let skillsProps: ChildrenProps = {
  styleHeader: "xl:mx-48 lg:mx-6 mx-2 divide-y-8 divide-signal",
  title: quotesData.quotes[2].section,
  quote: quotesData.quotes[2].quote,
  author: quotesData.quotes[2].author,
};
let interestProps: ChildrenProps = {
  styleHeader: "xl:mx-48 lg:mx-6 mx-2 divide-y-8 divide-signal",
  title: quotesData.quotes[3].section,
  quote: quotesData.quotes[3].quote,
  author: quotesData.quotes[3].author,
};
let contactProps: ChildrenProps = {
  styleHeader: "xl:mx-48 lg:mx-6 mx-2 divide-y-8 divide-signal",
  title: quotesData.quotes[4].section,
  quote: quotesData.quotes[4].quote,
  author: quotesData.quotes[4].author,
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div<{ primary: boolean }>`
  padding: 2rem 0;
  color: ${Colors["signal"]};
  background: ${(props) =>
    props.primary ? Colors["white"] : Colors["secondBackground"]};
`;

const App = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Content primary>
          <Profile {...profileProps} />
        </Content>
        <Content primary={false}>
          <CareerPath {...careerProps} />
        </Content>
        <Content primary>
          <Skills {...skillsProps} />
        </Content>
        <Content primary={false}>
          <OwnInterest {...interestProps} />
        </Content>
        <Content primary>
          <Contact {...contactProps} />
        </Content>
      </ContentWrapper>
    </div>
  );
};

export default App;
