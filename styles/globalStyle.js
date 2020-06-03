import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Inter', sans-serif;
        color: #1C1637;
    }

    input {
        font-family: 'Inter', sans-serif;
    }

    ul, ol {
        list-style: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button, select, textarea, input {
        outline: none;
    }

    @keyframes logoAnimation {
        0% {
            fill: #0047FF;
        }
        30% {
            fill: #fff;
        }
        100% {
            fill: #0047FF;
        }   
    }

    #logo {
        path {
            animation: logoAnimation 5s ease 0s 1;
        }
    }
`;

export default GlobalStyle;
