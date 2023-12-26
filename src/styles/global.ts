import { createGlobalStyle, css } from 'styled-components';
import 'leaflet/dist/leaflet.css';

const resetCss = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans JP", sans-serif;
  }

  input {
    position: relative;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${resetCss}
`;

export { GlobalStyle };
