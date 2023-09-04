import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    body {
        font-family: "Montserrat", Sans-serif;
        margin: 0;
        font-size: 22px;
    }

`

function Global() {
    return <StyledGlobalStyle />
}

export default Global