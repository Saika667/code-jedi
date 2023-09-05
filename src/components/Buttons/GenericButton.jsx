import { styled } from "styled-components";

const ButtonContainer = styled.div`
    
`

const Button = styled.div`
    background-color: #6BC9E3;
    display: flex;
    width: fit-content;
    margin: auto;
`

const Text = styled.span`
    // Pas besoin d'utiliser attrs, car les props sont directement passées à l'appel du styled component
    // Besoin d'attrs lorsqu'on veut ajouter une prop qui n'est pas passée
    color: white;
    font-size: .8em;
    text-align: center;
    font-weight: 700;
    padding: .6em 1em;
    cursor: pointer;

    position: relative;
    &:before {
        content: '';
        position: absolute;
        //calcul la taille de mon before, utilisation de calc pour récupérer le 100% de l'élément HTML
        width: calc(100% + ${props => props.$widthBorder} * 2);
        height: calc(100% + ${props => props.$widthBorder} * 2);
        // -1 * permet d'inverser le signe et positionne le before
        top: calc(-1 * ${props => props.$widthBorder});
        left: calc(-1 * ${props => props.$widthBorder});

        background: linear-gradient(90deg, ${props => props.$colorBorderOne} 15%, ${props => props.$colorBorderTwo} 77%),
                    linear-gradient(to top, ${props => props.$colorBorderOne} 50%, transparent 50%),
                    linear-gradient(to top, ${props => props.$colorBorderTwo} 50%, transparent 50%),
                    linear-gradient(to left, ${props => props.$colorBorderTwo} 0%, ${props => props.$colorBorderTwo} 100%),
                    linear-gradient(90deg, ${props => props.$colorBorderOne} 0%, ${props => props.$colorBorderTwo} 71%);
                    
        background-size: 100% ${props => props.$widthBorder},
                        ${props => props.$widthBorder} 200%,
                        ${props => props.$widthBorder} 200%,
                        0% ${props => props.$widthBorder},
                        0% ${props => props.$widthBorder};
        background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
        background-repeat: no-repeat, no-repeat;
        transition: transform ${props => props.$duration} ease-in-out,
                    background-position ${props => props.$duration} ease-in-out,
                    background-size ${props => props.$duration} ease-in-out;
        transform:scaleX(0) rotate(calc(180 * ${props => props.$direction + 'deg'}));
        transition-delay: calc(2 * ${props => props.$duration}), ${props => props.$duration}, 0s;
    }

    &:hover {
        &:before {
            background-size: 200% ${props => props.$widthBorder},
                        ${props => props.$widthBorder} 400%,
                        ${props => props.$widthBorder} 400%,
                        55% ${props => props.$widthBorder},
                        55% ${props => props.$widthBorder};
            background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
            transform: scaleX(1) rotate(calc(180 * ${props =>  props.$direction + 'deg'}));
            transition-delay: 0s, ${props => props.$duration}, calc(2 * ${props => props.$duration});
        }
    }
`

function GenericButton({label, colorOne = '#2872fa', colorTwo= '#9b51e0', width = '2px', duration = '150ms', direction = 0}) {
    return(
        <ButtonContainer>
            <Button>
                { /* Les props commencent par un dollar car on ne veut pas qu'elles soient incluses dans le dom */}
                { /* Si pas de majuscule dans une prop, elle sera par défaut incluse dans le DOM en tant que custom attribute */}
                <Text 
                    $colorBorderOne={colorOne}
                    $colorBorderTwo={colorTwo}
                    $widthBorder={width}
                    $duration={duration}
                    $direction={direction}
                >
                    {label}
                </Text>
            </Button>
        </ButtonContainer>
    )
}

export default GenericButton;