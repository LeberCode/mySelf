import React from 'react';
import {Header} from './components/Header';
import styled from 'styled-components';


const Wrapper = styled.div`
  overflow-x: scroll;
`

function App() {
  return (
    <Wrapper>
      <Header/>
      <div className="App">
        Hi this is Robin!
      </div>
    </Wrapper>
  );
}

export default App;
