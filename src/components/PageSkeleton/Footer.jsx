import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
   background-color: #111518;
`

const InformationsContainer = styled.div`
    color: rgba(255, 255, 255, .5);
    width: 80%;
    margin: auto;
    display: flex;

    &.socialNetwork {
        justify-content: flex-end;
    }

    &.mentionFooter {

    }

    @media only screen and (max-width: 992px) {
        &.socialNetwork {
            justify-content: center;
        }
    }
`

const SocialNetwork = styled.a`
    color: rgba(255, 255, 255, .5);
    padding: 1em;
    margin: 0 .1em;

    &:hover {
        color: white;
    }
`

const Text = styled.p`
    margin: 0;
    padding: 1em 0 2em 0;
    font-size: .7em;
`

function Footer() {
    return (
      <FooterContainer>
        <InformationsContainer className='socialNetwork'>
            <SocialNetwork href={'https://www.facebook.com/codetroopers37'} target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </SocialNetwork>
            <SocialNetwork href={'https://twitter.com/codetroopers'} target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </SocialNetwork>
            <SocialNetwork href={'https://www.linkedin.com/company/5058677/'} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </SocialNetwork>
        </InformationsContainer>
        <InformationsContainer className='mentionFooter'>
            <Text>Copyright © 2023 Développeurs applications web et mobiles : L'équipe Code-Troopers</Text>
        </InformationsContainer>
      </FooterContainer>
    );
  }
  
  export default Footer;
  