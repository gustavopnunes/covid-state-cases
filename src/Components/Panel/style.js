import styled from "styled-components";

export const PanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
        margin-top: .5rem;
        background-color: #222;
        padding: .3rem
    }

    hr {
        width: 100%;
        color: #222;
        border: solid 2px #222;
    }

    h2 {
        margin: 1rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        background-color: #222;
        width: 90vw;
        max-width: 24rem;
        text-align: center;
    }

    select {
        margin-top: .5rem;
    }

    table {
        font-size: .9rem;
        border-collapse: collapse;
        border: 1px solid gray;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    
    th {
        width: 16rem;
        padding: .2rem;
        background-color: blueviolet;
    }

    td {
        padding: 5px;
        border: 1px solid gray;
    }

    tr {
        border: 1px solid gray
    }
`