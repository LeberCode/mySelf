import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Profile from './components/Profile';
import CareerPath from './components/CareerPath';
import Skills from './components/Skills';
import OwnInterest from './components/OwnInterest';
import Footer from './components/Footer';

import {ChildrenProps} from './interfaces/childrenProps'
import {Colors} from './types/Colors';


const Wrapper = styled.div`
  overflow-x: scroll;
`
let childrenProps: ChildrenProps={
  style:"mx-64",
}


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div<{primary: boolean}>`
  padding: 2rem 0;
  color: ${Colors['signal']};
  background: ${props => props.primary ? Colors['white'] : Colors['secondBackground']};
`;



const App = () => {
  return (
    <Wrapper>
      <Header/>
      <ContentWrapper>
        <Content primary>
          <Profile {...childrenProps}/>
        </Content>
        <Content primary={false}>
          <CareerPath {...childrenProps}/>
        </Content>
        <Content primary>
          <Skills {...childrenProps}/>
        </Content>
        <Content primary={false}>
          <OwnInterest {...childrenProps}/>
        </Content>
      </ContentWrapper>
      <Footer/>
    </Wrapper>
  );
}

export default App;
