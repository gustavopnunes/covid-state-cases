import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #282c34;
        color: blanchedalmond;
        font-family: monospace;
        font-size: 1rem;
        overflow-x: hidden;
    }

    h1, p {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle;