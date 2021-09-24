import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Register from "pages/Register";
import Foods from "pages/Foods";
import Track from "pages/Track";
import Status from "pages/Status";
import AddFood from "pages/AddFood";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/viewFood" component={Foods} />
      <Route exact path="/status" component={Status} />
      <Route exact path="/addFood" component={AddFood} />

      <Route exact path="/createToken" component={Foods} />
      <Route exact path="/trackToken" component={Track} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
