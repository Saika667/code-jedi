import styled, { keyframes } from "styled-components";

const move = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(5px);
    }
    100% {
        transform: translateX(0);
    }
`

const box = keyframes`
    0% {
        box-shadow: #27272c;
    }
    50% {
        box-shadow: 0 0 25px #1559ed;
    }
    100% {
        box-shadow: #27272c;
    }
`

const ButtonContainer = styled.div`
    
`

const Button = styled.div`
    background: #e1e8ed;
    display: flex;
    width: fit-content;
    margin: .8em auto;
    border-radius: .15em;
    position: relative;
    color: black;
    transition: 200ms;
    padding: 0;
    user-select: none;
    cursor: pointer;

    &:hover {
        letter-spacing: 1px;
        padding: .2em;
        background: #1559ed;
        color: #1559ed;
        animation: ${box} 3000ms infinite;

        & i::before {
            border: 2px solid #1559ed;
            width: 15px;
            left: 20%;
            animation: ${move} 3000ms infinite;
        }
        & i::after {
            border: 2px solid #1559ed;
            width: 15px;
            left: 80%;
            animation: ${move} 3000ms infinite;
        }
    }
    &::before {
        content: "";
        position: absolute;
        inset: 2px;
        background: #FAFBFC;
    }
`

const Text = styled.span`
    font-size: .6em;
    text-align: center;
    font-weight: 700;
    padding: .8em 1.7em;
    position: relative;
    z-index: 1;
`

const Decor = styled.i`
    position: absolute;
    inset: 0;
    display: block;

    &::before, &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 2px;
        border: 2px solid #e1e8ed;
        background: #FAFBFC;
        transition: 0.2s;
    }

    &::before {
        left: 80%;
        top: -2px;
    }

    &::after {
        left: 20%;
        bottom: -2px;
    }
`

function SeeMoreButton() {
    return(
        <ButtonContainer>
            <Button>
                <Text>En savoir plus</Text>
                <Decor />
            </Button>
        </ButtonContainer>
    )
}

export default SeeMoreButton;