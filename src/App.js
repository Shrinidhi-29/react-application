import Header from "./components/navBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Overview ,Users , Revenue} from "./pages/overview";
import Home from "./pages/home";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/reports";

function App() {
  return (
    <>
      <Router>
        
          
          <Switch>
            <div>
            <Header />
           
            <Route  exact  path="/overview" component={Overview} />
            <Route  exact path="/overview/users" component={Users} />
            <Route  exact path="/overview/revenue" component={Revenue} />

            <Route   exact path="/reports" component={Reports} />
            <Route   exact path="/reports/reports1" component={ReportsOne} />
            <Route  exact  path="/reports/reports2" component={ReportsTwo} />
            <Route   exact path="/reports/reports3" component={ReportsThree} />
            </div>
          </Switch>
       
      </Router>
    </>
  );
}

export default App;
