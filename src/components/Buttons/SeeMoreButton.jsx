import { styled } from "styled-components";

const ButtonContainer = styled.div`
    
`

const Button = styled.div`
    background-color: #FAFBFC;
    display: flex;
    width: fit-content;
    margin: .8em auto;
    border-radius: .15em;
`

const Text = styled.span`
    font-size: .6em;
    text-align: center;
    font-weight: 700;
    padding: .8em 1.7em;
`

function SeeMoreButton() {
    return(
        <ButtonContainer>
            <Button>
                <Text>En savoir plus</Text>
            </Button>
        </ButtonContainer>
    )
}

export default SeeMoreButton;