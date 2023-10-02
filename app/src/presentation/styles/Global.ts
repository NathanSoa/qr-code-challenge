import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
    :root{
        --bs-body-line-height: normal;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${({ theme }) => theme['light-gray']};
        font-size: 18px;
        font-family: 'Outfit', sans-serif;
    }

    body, input, textarea, button{
        font-size: 1rem;
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 11px;
    }

    *::-webkit-scrollbar-track {
        background: #DBDBDB;
    }

    *::-webkit-scrollbar-thumb {
        background: #AFAFAF;
        border-radius: 10px;
    }
`