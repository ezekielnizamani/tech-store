import Header from './components/Header';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {Route} from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
