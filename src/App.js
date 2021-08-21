import GlobalStyle from './globalStyles';
import { Header } from './Components/Header';
import { Panel } from './Components/Panel';
import {Footer} from "./Components/Footer"

function App() {
  return (
    <>
      <GlobalStyle />
        <Header>
          <h1>CASOS DE COVID 19 POR ESTADO</h1>
        </Header>
        <Panel />
        <Footer />
      </>
  );
}

export default App;
