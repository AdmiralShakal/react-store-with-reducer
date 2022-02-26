import {Header} from "./components/Header.jsx"
import {Store} from "./components/Store.jsx"
import {Footer} from "./components/Footer.jsx"

import { ContextProvider } from "./context.js";

function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <ContextProvider>
          <Store/>
        </ContextProvider>
        <Footer/>
      </>
    </div>
  );
}

export default App;
