import styled from 'styled-components';
import Header from './components/PageSkeleton/Header';
import Body from './components/PageSkeleton/Body';
import Footer from './components/PageSkeleton/Footer';

const PageContainer = styled.div`
  margin: 0;
  display: block;
`

function App({ children }) {
  return (
      <PageContainer>
        { children }
        <Header />
        <Body />
        <Footer />
      </PageContainer>
  );
}

export default App;
