import styled from "styled-components"

export const LogoStyled = styled.div`
    img {
        width: 100%;
        max-width: 6rem;
        animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`