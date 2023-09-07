import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavigationContainer = styled.nav`
    background-color: black;
    display: flex;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`

const NavigationItemContainer = styled.div`
    background: black;
    height: 100vh;
    position: absolute;
    top: 57px;
    bottom: 0;
    width: 100%;
    translate: -100%;
    transition: translate 250ms linear;

    &.isVisible {
      translate: 0;
    }
`

const NavigationItem = styled.div`
    cursor: pointer;
    padding: .3em 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ItemName = styled.h2`
    color: white;
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 1px;
`

const IconContainer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8em 1.2em;
`

const Separator = styled.div`
    margin: 0.7em auto;
    width: 15%;
    height: 3px;
    background-color: white;
`

function MobileNavigation() {
    const [isVisible, setIsVisible] = useState(false)

    return (
      <NavigationContainer>
        <IconContainer onClick={() => setIsVisible(!isVisible)}>
            <FontAwesomeIcon icon={faBars} />
        </IconContainer>

        <NavigationItemContainer 
          className={isVisible ? 'isVisible' : ''} 
          onClick={() => setIsVisible(!isVisible)}
        >
          <NavigationItem>
            <ItemName>code-troopers</ItemName>
          </NavigationItem>

          <Separator />
          
          <NavigationItem>
            <ItemName>compétences</ItemName>
          </NavigationItem>

          <Separator />
          
          <NavigationItem>
            <ItemName>réalisations</ItemName>
          </NavigationItem>

          <Separator />
          
          <NavigationItem>
            <ItemName>troopers</ItemName>
          </NavigationItem>

          <Separator />
          
          <NavigationItem>
            <ItemName>contact</ItemName>
          </NavigationItem>

          <Separator />
          
          <NavigationItem>
            <ItemName>blog</ItemName>
          </NavigationItem>
        </NavigationItemContainer>
      </NavigationContainer>
    );
  }
  
  export default MobileNavigation;