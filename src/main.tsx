import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Wrapper = styled.div`
  font-family: 'Roboto';
  font-weight: 400;

`

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './aulas/aula09/questao02/Input'
import styled from "styled-components"
    

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Wrapper>
      <App />
    </Wrapper>
)
