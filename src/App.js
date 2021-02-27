import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import Navbar from "./components/Navbar"
import HomeCard from "./components/HomeCard"
import AddressCard from "./components/AddressCard"
import VaultCard from "./components/VaultCard"

import "./App.css"

function App() {
  return (
      <>
        <BrowserRouter>
        <Navbar />
<NotificationContainer/>


            <Switch>
            <Route exact path={"/"} key="home-page" component={HomeCard}/>
            <Route exact path={"/addresses"} key="dashboard-page" component={AddressCard}/>
            <Route exact path={"/vault"} key="dashboard-page" component={VaultCard}/>
            
          </Switch>    
      </BrowserRouter>  



        {/* BODY */}
        {/* FOOTER */}
      </>
  );
}

export default App;
