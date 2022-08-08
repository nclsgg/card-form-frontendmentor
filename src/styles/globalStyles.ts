import { createGlobalStyle } from 'styled-components';
import { colors } from './variables'; 

const GlobalStyle = createGlobalStyle`
  
  body { 
    margin: 0;
    padding: 0;
    background: ${colors.white};
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;