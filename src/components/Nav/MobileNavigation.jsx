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
    display: none;
    flex-direction: column;
    background-color: blue;
    height: 100vh;
    position: absolute;
    top: 57px;
    left: 0;
    right: 0;
    bottom: 0;
    &.isVisible {
      display: flex;
    }
`

const NavigationItem = styled.div`
    cursor: pointer;
    padding: .3em 0;
    display: flex;
    align-items: center;
`

const ItemName = styled.h2`
    color: white;
    text-transform: uppercase;
    padding: 0 0 0 2em;
    font-size: .62em;
    letter-spacing: 1px;
`

const IconContainer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8em 1.2em;
`

function MobileNavigation() {
    const [isVisible, setIsVisible] = useState(false)
    return (
      <NavigationContainer>
        <IconContainer onClick={() => setIsVisible(!isVisible)}>
            <FontAwesomeIcon icon={faBars} />
        </IconContainer>

        <NavigationItemContainer className={isVisible ? 'isVisible' : ''} onClick={() => setIsVisible(!isVisible)}>
          <NavigationItem>
            <ItemName>code-troopers</ItemName>
          </NavigationItem>

          <NavigationItem>
            <ItemName>compétences</ItemName>
          </NavigationItem>

          <NavigationItem>
            <ItemName>réalisations</ItemName>
          </NavigationItem>

          <NavigationItem>
            <ItemName>troopers</ItemName>
          </NavigationItem>

          <NavigationItem>
            <ItemName>contact</ItemName>
          </NavigationItem>

          <NavigationItem>
            <ItemName>blog</ItemName>
          </NavigationItem>
        </NavigationItemContainer>
      </NavigationContainer>
    );
  }
  
  export default MobileNavigation;