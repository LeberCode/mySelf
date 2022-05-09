import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import CareerPath from './components/CareerPath';
import Skills from './components/Skills';
import OwnInterest from './components/OwnInterest';
import Footer from './components/Footer';
import styled from 'styled-components';


const Wrapper = styled.div`
  overflow-x: scroll;
`

function App() {
  return (
    <Wrapper>
      <Header/>
      <Profile/>
      <CareerPath/>
      <Skills/>
      <OwnInterest/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
