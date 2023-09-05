import styled, { keyframes } from 'styled-components';
import { Separator } from './Header'
import GenericButton from '../Buttons/GenericButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';
import SeeMoreButton from '../Buttons/SeeMoreButton';
import { GlobalContext } from '../../utils/Context';

const leftSideBarMove = keyframes`
    0% {
        transform: translateX(-11em);
        opacity: 0;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

const rightSideBarMove = keyframes`
    0% {
        transform: translateX(11em);
        opacity: 0;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

const BodyContainer = styled.div`
    background: linear-gradient(180deg, rgba(107,201,227,1) 40%, rgba(6,147,227,1) 90%);
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const SideContainer = styled.section`
    width: 20%;
    height: 100%;
    padding: .5em;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: sticky;
    top: 2.9em;

    &.isVisible {
        display: none;
        opacity: 1;
        transition: opacity 500ms;
    }

    &.left {
        align-items: flex-end;
    }

    &.right {
        align-items: flex-start;
    }

    @media only screen and (max-width: 768px) {
        position: relative;
        top: 0;
        width: 100%;
    }

    @media only screen and (min-width: 769px) and (max-width: 991px) {
        width: 100%;
        align-items: center;
        top: 116px;
        height: fit-content;

        &.left {
            top: 310px;
        }
        &.right {
            top: 116px;
        }
    }
`

const SideInformationsContainer = styled.div`
    position: relative;
    @media only screen and (max-width: 768px) {
        margin: auto;
    }
    opacity: 0;
    &.leftContainer {
        animation: ${leftSideBarMove} 500ms 800ms linear forwards;
    }

    &.rightContainer {
        animation: ${rightSideBarMove} 500ms 800ms linear forwards;
    }
`

const CenterContainer = styled.section`
    width: 60%;
    background-color: white;
    padding: 1em .5em;
    box-sizing: border-box;
    z-index: 1;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    @media only screen and (min-width: 769px) and (max-width: 991px) {
        width: 80%;
    }
`

const Paragraph = styled.p`
    font-size: .725em;
    margin: 1.5em 0;

    &.side {
        font-size: .6em;
        &.last {
            margin: 1.5em 0 0 0;
        }
    }
`

const SectionTitleContainer = styled.div`
    color: #6BC9E3;
`

const SectionTitle = styled.h4`

`

const SeparatorElt = styled(Separator)`
    margin: 2em 0;
    width: 15%;
`

const Bold = styled.strong`
    font-weight: 700;
`

const List = styled.ul`
    font-size: .725em;
`

const ItemList = styled.li`

`

const SideFrame = styled.div`
    border: 3px solid white;
    padding: .5em;
    max-width: 220px;
    box-sizing: border-box;
    text-shadow: #FFFFFF 1px 0 10px;

    @media only screen and (max-width: 768px) {
        max-width: fit-content;
    }
`

const SideTitle = styled.h5`
    text-align: center;
    margin: 0;
    font-size: .6em;

    &.jobOffer {
        margin: 1em 0;
    }
`

const JobOffer = styled.article`
    text-shadow: #FFFFFF 1px 0 10px;
`

const InformationElement = styled.div`
    font-size: .6em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.span`
    padding: .1em 0.5em ;
`

const LinkText = styled.a`
    color: #6bc9e3;
    text-decoration: none;
`

const TabletColumn = styled.div`
    display: flex;
    flex-direction: column;
`

function Body() {
    const { device } = useContext(GlobalContext)

    return (
        <BodyContainer>
        { device === 'mobile' || device === 'desktop' ?
            <SideContainer className='left'>
                <SideInformationsContainer className='leftContainer'>
                    <SideFrame>
                        <SideTitle>D'autres offres d'emploi chez Code-Troopers&nbsp;:</SideTitle>
                    </SideFrame>

                    <JobOffer>
                        <SideTitle className='jobOffer'>ALTERNANTS (H/F)</SideTitle>
                        <InformationElement>
                            <FontAwesomeIcon icon={faFileContract} />
                            <Text>Alternance</Text>
                        </InformationElement>

                        <InformationElement>
                            <FontAwesomeIcon icon={faMapPin} />
                            <Text>Tours</Text>
                        </InformationElement>
                    </JobOffer>
                    <SeeMoreButton />
                </SideInformationsContainer>
            </SideContainer>
            : null
        }

        <CenterContainer>
            <Paragraph>
                Code-Troopers recherche des développeurs Front-end et / ou back-end (H/F), CDI, 35h.
            </Paragraph>

            <Paragraph>
                Plusieurs postes sont à pourvoir ! (De Junior à Sénior)
            </Paragraph>

            <Paragraph>
                Si tu crois ne pas avoir toutes les compétences, postules quand même ! “On sait jamais, sur un malentendu ça peut marcher”
            </Paragraph>

            <SectionTitleContainer>
                <SectionTitle>Qui sommes nous ? 🧑‍💻</SectionTitle>
                <SeparatorElt />
            </SectionTitleContainer>

            <Paragraph>
                Nous sommes une entreprise de développeurs passionnés, expérimentés, à taille humaine, qui accompagne tout type d'entreprises (pas de secteur d'activité prédéfinis), dans 
                la réalisation de projetsinformatiques, du <Bold>conseil</Bold> au <Bold>développement</Bold> d'applications <Bold>web</Bold> et <Bold>mobiles</Bold> tout en abordant la 
                transformation des processus grâce à des méthodes agiles. 
            </Paragraph>
            <Paragraph>
                Nous entreprenons également des <Bold>projets</Bold> à l'instar de <Bold>NAVIG'</Bold> (application agrégateur de données pour faciliter l'expérience voyageurs : Filbleu, 
                TAO) et <LinkText href='https://chapi.to/' target='blank'>Chapitô</LinkText> ( générateur d'application mobile pour événement type festivals : Printemps de Bourges, Aucard, Terres du Son, Solidays, et plus de 40 autres festivals.)
            </Paragraph>
            <Paragraph>
                Nous sommes aussi impliqués dans la <Bold>vie associative locale</Bold> (“l'écosystème local”, comme disent les pros) en participant et organisant des rencontres autour du 
                monde du développement et autre (<Bold>GDG, Touraine Tech, Mash Up</Bold>).
            </Paragraph>
            <Paragraph>
                Aujourd'hui nous ne pouvons pas répondre à toutes les demandes de nos clients et nous souhaiterions développer un peu notre équipe, nous avons besoin de toi.
            </Paragraph>
            <Paragraph>
                <Bold>Avant tout,</Bold> tu ne penses pas correspondre à 100% à la description ci- dessous ? Rien de bloquant, postule quand même et rencontrons-nous !
            </Paragraph>
            <Paragraph>
                Nous recherchons un développeur <Bold>Front</Bold>, de <Bold>préférence mais</Bold> pouvons aussi être intéressé par un profil plutôt <Bold>Back</Bold>
            </Paragraph>

            <SectionTitleContainer>
                <SectionTitle>Où travaillera le futur Trooper ? 🗺</SectionTitle>
                <SeparatorElt />
            </SectionTitleContainer>

            <Paragraph>
                Les locaux sont tout <Bold>neufs</Bold>, tout beaux, tout <Bold>équipés</Bold> : TV et consoles pour des pauses dej sympa, machine à café (illimité), si tu préféres le thé 
                y'a ce qu'il faut aussi, <Bold>babyfoot (qui sert vraiment !)</Bold>, fléchettes, bières au frais, salle de réunion, cabines téléphoniques, <Bold>patio</Bold> extérieur, 
                barbecue, etc. 
            </Paragraph>
            <Paragraph>
                Ils se trouvent en <Bold>centre ville de Tours</Bold>, proche de la Gare, à 2 pas du palais des sports (piscine, patinoire, etc.)
            </Paragraph>
            <Paragraph>
                Les locaux sont très bien, mais nous sommes aussi remote friendly donc si tu préfères travailler depuis chez toi, c'est possible aussi ! <Bold>Ou faire les deux.</Bold> 
                Comme tu veux !
            </Paragraph>
            <Paragraph>
                Tu travailleras chez toi ou au bureau avec toute l'équipe, <Bold>pas chez le client.</Bold>
            </Paragraph>

            <SectionTitleContainer>
                <SectionTitle>Profil & compétences 👩‍🎓🧑‍🎓</SectionTitle>
                <SeparatorElt />
            </SectionTitleContainer>

            <Paragraph>
                ⚠️ c'est là où si tout ne colle pas, c'est pas très grave ! L'idée est de te trouver des missions qui te plaisent, dans lesquelles tu es à l'aise et tu pourras évoluer. 
                On s'adapte selon ton niveau également. Un développeur confirmé peut par exemple avoir 1 ou 2 juniors sous son aile, ou pas.
            </Paragraph>
            <Paragraph>
                Tu es passé par une <Bold>école d'ingénieurs ou équivalent</Bold>.
            </Paragraph>
            <Paragraph>
                Tes stages ou expériences personnelles précédentes ton confortées dans ton choix de devenir un développeur complet.
            </Paragraph>
            <Paragraph>
                Tu es attentif aux performances et sensible à la sécurité.
            </Paragraph>
            <Paragraph>
                Tu es curieux ou passionné, tu connais plusieurs <Bold>langages, frameworks</Bold>, ou <Bold>outils</Bold>&nbsp;: React, Vue, Rest, Swift, Angular, Java, Kotlin, GraphQL, 
                JS, Node Github, Gitlab, etc…
            </Paragraph>
            <Paragraph>
                … ou tu es prêt à les découvrir. La curiosité informatique est un bon point. 
            </Paragraph>
            <Paragraph>
                Tu as une bonne <Bold>vision d'ensemble</Bold> de l'IT (Back-End, Front-End, DevOps/Cloud, Data,…)&nbsp;: idéal pour partager avec n’importe quel <Bold>Trooper</Bold> !
            </Paragraph>
            <Paragraph>
                Tu pourras également évoluer techniquement, nous sommes ouverts à d'autres technos.
            </Paragraph>

            <SectionTitleContainer>
                <SectionTitle>Missions 📄</SectionTitle>
                <SeparatorElt />
            </SectionTitleContainer>

            <Paragraph>
                💡 Le but est de trouver une mission qui te plait ! Il s'agit de création de poste, c'est donc à construire ensemble, en fonction de nos échanges. Nous pouvons avoir des 
                postes vaquants au seins de missions actuelles mais ce n'est pas toujours le cas !
            </Paragraph>
            <Paragraph>
                Tu interviendras sur l'ensemble ou une partie du processus d'un projet : <Bold>conception, développement, tests</Bold>. Tu pourras participer aux choix d'archi, de protocole, 
                d'intégration, pour un client avec un autre membre de l'équipe de Code-Troopers. Parfois directement auprès du client.
            </Paragraph>
            <Paragraph>
                En fonction de ton profil soit tu seras sous la responsabilité d'un Lead dev (mais tu seras autonome dans beaucoup de tâches) soit tu seras susceptible d'accompagner des 
                développeurs juniors, ou tout simplement travailler en collaboration avec des développeurs de ton niveau.
            </Paragraph>
            <Paragraph>
                Tu pourras <Bold>choisir ton projet</Bold> dans la mesure du possible !
            </Paragraph>
            <Paragraph>
                En inter-contrat (ça peut arriver), pas de tâche administratives, tu travailleras sur des projets perso ou sur des produits de l'entreprise (NAVIG' ou Chapitô par exemple).
            </Paragraph>
            <Paragraph>
                EXEMPLE d'une mission disponible actuellement chez nous juste ici&nbsp;: 👇
            </Paragraph>
            
            <GenericButton label={'Mission'} />

            <SectionTitleContainer>
                <SectionTitle>Notre promesse 😇</SectionTitle>
                <SeparatorElt />
            </SectionTitleContainer>

            <Paragraph>
                Au sein de notre équipe le <Bold>respect des règles de l'art</Bold> est une de nos valeurs, le <Bold>challenge technique</Bold> en est une autre. Tu auras la liberté de 
                choisir les technos que tu veux utiliser, tu pourras régulièrement participer à des démos et en préparer pour  l'équipe. Le but est de challenger les autres et se faire 
                challenger, si tu en as envie.
            </Paragraph>
            <Paragraph>
                Nous souhaitons que tous les collaborateurs soient épanouis, nous attachons donc de l'importance au respect de la vie personnelle, nous respectons les horaires et sommes 
                flexibles.
            </Paragraph>
            <Paragraph>
                Il sera également possible d'évoluer au sein de Code-Troopers car nous sommes une <Bold>entreprise en plein développement</Bold>. 
            </Paragraph>
            <Paragraph>
                Nous te promettons aussi une hiérarchie très à plat (c'est vrai !), il n'y a pas plus de 1 niveau hiérarchique, c'est une entreprise familiale. Les demandes des salariés 
                aboutissent très vite. 
            </Paragraph>
            <Paragraph>
                Chez nous pas de CTO, CEO, COO, CMO, CFO seulement Cédric, Vincent, Florian, Nicolas, Joris, Romain, Benjamin, Matthieu, Vincent, Pierre, Thibaud, Aimeric, Charles-Marie, 
                Antonio et Alice → <LinkText href='https://team.code-troopers.com/' target='blank'>Tu peux nous découvrir ici.</LinkText> C'est une entreprise créée et pilotée par des devs !
            </Paragraph>
            <Paragraph>
                Tu pourras aussi <Bold>t'impliquer</Bold> dans <Bold>l'organisation d'événements</Bold> si tu le souhaites, ou participer à des <Bold>conférences</Bold> (Touraine Tech , 
                Breizhcamp, Devoxx, Devfest, MixIT, BDX I/O, etc.) sur ton temps de travail. 
            </Paragraph>
            <Paragraph>
                Tu auras la possibilité de changer de projet ou de clients. De faire de la prestation de service ou du produit lorsque nécessaire. Autonomie, entre-aide, diversités de 
                projets sont des mots clefs de l'entreprise. 
            </Paragraph>
            <Paragraph>
                <Bold>Mais Code-Troopers c'est aussi&nbsp;: </Bold>
            </Paragraph>
            
            <List>
                <ItemList>La possibilité de choisir ton <Bold>set-up complet</Bold></ItemList>
                <ItemList><Bold>Licences</Bold> des outils de travail <Bold>de votre choix</Bold> (suite logicielle non-imposée)</ItemList>
                <ItemList>Un <Bold>fauteuil</Bold> Maxnomic</ItemList>
                <ItemList>Des temps de <Bold>partages, apéro, teambuilding</Bold> régulier</ItemList>
                <ItemList>Une prise en charge de la <Bold>mutuelle</Bold> complémentaire à <Bold>100%</Bold></ItemList>
                <ItemList>Un plan <Bold>d'épargne salarial</Bold> optimisé (PERCO, PEE)</ItemList>
                <ItemList>Des avantages sur les <Bold>resto (titres restaurant)</Bold>, les <Bold>abonnements</Bold> de <Bold>téléphones</Bold>, les <Bold>transport en commun</Bold> etc.</ItemList>
                <ItemList>Une ambiance décontractée, des parties de babyfoot incroyables</ItemList>
            </List>

            <Paragraph>
                Renseignements complémentaires sur ce poste développeur Front&nbsp;: <Bold>06 66 70 13 79</Bold> ou Linkedin <LinkText href='https://www.linkedin.com/in/nicolas-dauphin-moulin/' target='blank'><Bold>Nicolas Dauphin-Moulin</Bold></LinkText>
            </Paragraph>

            <GenericButton label={'POSTULER'} />
        </CenterContainer>

        { device === 'desktop' || device === 'mobile' ?
            <SideContainer className='right'>
                <SideInformationsContainer className='rightContainer'>
                    <SideFrame>
                        <SideTitle>Nature du poste&nbsp;:</SideTitle>
                        <Paragraph className='side'>CDI à temps plein, 35h.</Paragraph>
                        <Paragraph className='side'>6 semaines de congés.</Paragraph>
                        <Paragraph className='side last'>Salaire&nbsp;: ≈ 30-60k selon expériences (pro et perso) et profil.</Paragraph>
                    </SideFrame>
                </SideInformationsContainer>
            </SideContainer>
            : null
        }
        
        {device === 'tablet' ?
            <TabletColumn>
                <SideContainer className='right'>
                    <SideInformationsContainer className='rightContainer'>
                        <SideFrame>
                            <SideTitle>Nature du poste&nbsp;:</SideTitle>
                            <Paragraph className='side'>CDI à temps plein, 35h.</Paragraph>
                            <Paragraph className='side'>6 semaines de congés.</Paragraph>
                            <Paragraph className='side last'>Salaire&nbsp;: ≈ 30-60k selon expériences (pro et perso) et profil.</Paragraph>
                        </SideFrame>
                    </SideInformationsContainer>
                </SideContainer>

                <SideContainer className='left'>
                    <SideInformationsContainer className='rightContainer'>
                        <SideFrame>
                            <SideTitle>D'autres offres d'emploi chez Code-Troopers&nbsp;:</SideTitle>
                        </SideFrame>

                        <JobOffer>
                            <SideTitle className='jobOffer'>ALTERNANTS (H/F)</SideTitle>
                            <InformationElement>
                                <FontAwesomeIcon icon={faFileContract} />
                                <Text>Alternance</Text>
                            </InformationElement>

                            <InformationElement>
                                <FontAwesomeIcon icon={faMapPin} />
                                <Text>Tours</Text>
                            </InformationElement>
                        </JobOffer>
                        <SeeMoreButton />
                    </SideInformationsContainer>
                </SideContainer>
            </TabletColumn>
            : null
        }
        </BodyContainer>
    );
}

export default Body;