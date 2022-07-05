import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: none;
    border: none;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }

  html{
    font-size: 11px;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
    font-display: fallback;
    -ms-overflow-style: none;
    scrollbar-width: none;
    word-wrap: break-word;
    -webkit-text-size-adjust: none; 
		-moz-text-size-adjust: none; 
		-ms-text-size-adjust: none; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    -webkit-touch-callout:none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, em, img, small, b, u, i, ul, li, form, label, footer, header, nav, section, input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    list-style: none;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
      fill: #f2f3f4;
    }
  }

  a {
    text-decoration: none;
  }
`;
