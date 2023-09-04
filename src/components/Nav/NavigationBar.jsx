import styled from 'styled-components';

const NavigationContainer = styled.nav`
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    @media only screen and (min-width: 769px) and (max-width: 991px) {
        flex-wrap: wrap;
    }
`

const NavigationItem = styled.div.attrs(props => ({
  label: props.label
}))`
    cursor: pointer;
    width: 16.6%;
    padding: .6em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 500ms;

    &:before {
      content: '${props => props.label}';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(80deg, rgba(107,201,227,1) 40%, rgba(6,147,227,1) 90%);
      opacity: 0;

      color: white;
      text-transform: uppercase;
      text-align: center;
      font-size: .62em;
      letter-spacing: 1px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      &:before {
        opacity: 1;
        transition: all 500ms;
      }  
    }

    @media only screen and (min-width: 769px) and (max-width: 991px) {
        width: 50%;
        padding: 0;
    }
`

const ItemName = styled.h2`
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: .62em;
    letter-spacing: 1px;
`

function NavigationBar() {
  return (
    <NavigationContainer>
      <NavigationItem label={'code-troopers'}>
        <ItemName>code-troopers</ItemName>
      </NavigationItem>
      <NavigationItem label={'compétences'}>
        <ItemName>compétences</ItemName>
      </NavigationItem>
      <NavigationItem label={'réalisations'}>
        <ItemName>réalisations</ItemName>
      </NavigationItem>
      <NavigationItem label={'troopers'}>
        <ItemName>troopers</ItemName>
      </NavigationItem>
      <NavigationItem label={'contact'}>
        <ItemName>contact</ItemName>
      </NavigationItem>
      <NavigationItem label={'blog'}>
        <ItemName>blog</ItemName>
      </NavigationItem>
    </NavigationContainer>
  );
}

export default NavigationBar;
