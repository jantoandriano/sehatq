import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PurchasedHistory from "./pages/PurchasedHistory";
import SearchPage from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import store from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isLogin } from "./utils/isLogin";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/beranda" component={Home} />
          <PrivateRoute exact path="/search-page" component={SearchPage} />
          <PrivateRoute exact path="/product/:id" component={DetailProduct} />
          <PrivateRoute exact path="/wishlist" component={Wishlist} />
          <PrivateRoute exact path="/purchase" component={PurchasedHistory} />
        </Switch>
      </Router>
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default App;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
