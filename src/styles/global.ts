import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52EAD;
    --blue: #5429CC;
    
    --blue-light: #6933FF;
    
    --text-light: #363F5F;
    --text-body: #969C83;
    
    --background: #f8f2f5;
    --shape: #FFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
