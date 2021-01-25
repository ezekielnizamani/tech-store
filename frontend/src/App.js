import Header from './components/header/Header';
import {Container} from 'react-bootstrap'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <>
      <Header />
      <main className="py-5">
      <Container>
        <HomeScreen/>
      </Container>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
