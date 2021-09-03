import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import AdminDashboard from "./components/AdminDashboard";
import TopBar from "./components/TopBar";
import ErorPg from "./components/ErorPg";
import Home from "./components/Home";
import FooterBar from "./components/FooterBar";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addevent" component={AddEvent} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="*" component={ErorPg} />
        </Switch>
        <FooterBar/>
      </Router>
    </>
  );
}

export default App;
