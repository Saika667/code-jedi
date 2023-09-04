import styled from 'styled-components';
import NavigationBar from '../Nav/NavigationBar';
import headerTrooper from '../../assets/headerBackground.webp';
import logoTrooper from '../../assets/troopersLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faFileContract, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import MobileNavigation from '../Nav/MobileNavigation';

const HeaderContainer = styled.header`
    background: url(${headerTrooper}) no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        //background: rgba(107, 201, 227, 0.3);
        background: linear-gradient(0deg, rgba(25,42,61, .5) 25%, rgba(107,201,227, .3) 73%);
    }
`

const HeaderInformations = styled.div`
    color: white;
    position: relative;
    z-index: 1;
`

const InformationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &.logo {
        padding: 3.5em 0 .8em 0;
    }

    &.infosContainer {
        justify-content: space-around;

        @media only screen and  (max-width: 768px) {
            justify-content: center;
        }
    }

    @media only screen and  (max-width: 768px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 769px) and (max-width: 991px) {
        &.logo {
            padding: 6.5em 0 .8em 0;
        }
    }
`

export const Separator = styled.hr`
    width: 10%;
    border: none;
    background-color: #6BC9E3;
    height: 5px;
    margin: 0.8em auto;
`

const Image = styled.img`

`

const TitlePage = styled.h1`
    font-size: 2em;
    margin: 0;
    text-align: center;
`

const TitleDescPage = styled.h3`
    margin: 0;
    text-align: center;
    
    @media only screen and  (max-width: 768px) {
        margin: 0 .5em;
    }
`

const InformationElement = styled.div`
    padding: 1.5em 0;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and  (max-width: 768px) {
        width: 100%;
        padding: 1em 0 .7em 0;
    }
`

const Text = styled.span`
    padding: 0 0 0 .3em;
`

function Header() {
    const [descWidth, setDescWidth] = useState(800)

    useEffect(() => {
        setDescWidth(window.innerWidth)
    }, [])

  return (
    <HeaderContainer>
        {descWidth < 768 ?
            <MobileNavigation />
            :
            <NavigationBar />
        }
      
      <HeaderInformations>
        <InformationContainer className='logo'>
            <Image src={logoTrooper} />
        </InformationContainer>

        <InformationContainer>
            <TitlePage>À la recherche d'un nouveau Trooper</TitlePage>
        </InformationContainer>

        <Separator />

        <InformationContainer>
            <TitleDescPage>DÉVELOPPEUR Front et/ou Back (H/F)</TitleDescPage>
        </InformationContainer>

        <Separator />

        <InformationContainer>
            <TitleDescPage>Rejoins l'équipe !</TitleDescPage>
        </InformationContainer>

        <InformationContainer className='infosContainer'>
            <InformationElement>
                <FontAwesomeIcon icon={faFileContract} />
                <Text>CDI</Text>
            </InformationElement>
            <InformationElement>
                <FontAwesomeIcon icon={faMapPin} />
                <Text>Tours</Text>
            </InformationElement>
            <InformationElement>
                <FontAwesomeIcon icon={faSuitcase} />
                <Text>De Junior à Sénior</Text>
            </InformationElement>
        </InformationContainer>
      </HeaderInformations>
    </HeaderContainer>
  );
}

export default Header;
