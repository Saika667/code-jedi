import styled from 'styled-components';
import Header from './PageSkeleton/Header';
import Body from './PageSkeleton/Body';
import Footer from './PageSkeleton/Footer';
import { GlobalProvider } from '../utils/Context';

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
