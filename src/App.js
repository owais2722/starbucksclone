import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Menu from './components/menu/Menu';
import Rewards from './Rewards';
import Gift from './Gift';
import Join from "./Join";
import Sign from "./Sign";
import ShopLoc from "./ShopLoc";
import LandPg from "./components/LandPg";
function App() {
  return (
    <>
    
      <NavBar/>
    <Switch>
      <Route path="/" component={LandPg} exact></Route>
      <Route path="/menu" component={Menu} exact></Route>
      <Route path="/rewards" component={Rewards} ></Route>
      <Route path="/gift" component={Gift} ></Route>
      <Route path="/join" component={Join} ></Route>
      <Route path="/sign" component={Sign} ></Route>
      <Route path="/shop" component={ShopLoc} ></Route>
    </Switch>
    </>
  );
}

export default App;
