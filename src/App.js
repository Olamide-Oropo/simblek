import './App.css';
import React from 'react';
import Nav from './component/Nav';
import Modal from "./component/Modal"
import Tyres from "./assests/Tyres.json";
import Main from './component/Main';
import Footer from './component/Footer';
import { TyreContext } from './assests/TyreProvider';
import { GlobalContext } from './assests/GlobalState';

function App() {
  const [state,setState] = React.useState(JSON.parse(JSON.stringify(Tyres)))
  const [isOpen,setIsOpen] = React.useState(false)
  const [screenSize,setScreenSize] = React.useState(window.innerWidth)
  React.useEffect(() => {
      const Handelresize = () => {setScreenSize(window.innerWidth)}
      window.addEventListener("resize",Handelresize)
  },[])
  JSON.parse(JSON.stringify(Tyres))
  return (
    <GlobalContext.Provider value={[isOpen,setIsOpen]}>
    <TyreContext.Provider value={[state,setState]}>
      <div className="App">
        <Nav />
        {isOpen?<Modal />:(
        <>
          <Main screenSize={screenSize}/>
          <Footer />
        </>)}
      </div>
    </TyreContext.Provider>
    </GlobalContext.Provider>
    
  );
}

export default App;
