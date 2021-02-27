import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar"
import HomeCard from "./components/HomeCard"
import AddressCard from "./components/AddressCard"

import "./App.css"

function App() {
  return (
      <>
        <BrowserRouter>
        <Navbar />

            <Switch>
            <Route exact path={"/"} key="home-page" component={HomeCard}/>
            <Route exact path={"/addresses"} key="dashboard-page" component={AddressCard}/>
          </Switch>    
      </BrowserRouter>  



        {/* BODY */}
        {/* FOOTER */}
      </>
  );
}

export default App;
