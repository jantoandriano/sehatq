import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/beranda" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/search-page" component={SearchPage} />
          <Route path="/product/:id" component={DetailProduct} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/purchase" component={PurchasedHistory} />
        </Switch>
      </Router>
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default App;
