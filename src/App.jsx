import styled from 'styled-components';
import Header from './components/PageSkeleton/Header';
import Body from './components/PageSkeleton/Body';
import Footer from './components/PageSkeleton/Footer';
import { GlobalProvider } from './utils/Context';

const PageContainer = styled.div`
  margin: 0;
  display: block;
`

function App({ children }) {
  return (
    <GlobalProvider>
      <PageContainer>
        { children }
        <Header />
        <Body />
        <Footer />
      </PageContainer>
    </GlobalProvider>
  );
}

export default App;
