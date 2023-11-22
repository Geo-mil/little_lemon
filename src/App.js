import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header>
        <Nav/>
      </Header>
      <Main>
        Homepage
      </Main>
      <Footer>
        <Nav></Nav>
      </Footer>
    </>
  );
}

export default App;
