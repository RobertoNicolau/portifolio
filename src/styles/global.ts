import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #0F1112;
        --secondary: #1C1F21;
        --text-color: #fff;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body{
        font-family: 'Popins', Helvetica, sans-serif;
        background: var(--background-color);
    }
    h1{
        color: var(--text-color)
    }

`