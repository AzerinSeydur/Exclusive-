import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Wishlist from './components/Wishlist/Wishlist.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import NotFound from './components/NotFound/404.jsx';
import Profile from './components/Profile/Profile.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import CategoryProduct from './components/CategoryProduct/CategoryProduct.jsx';
import firebaseConfig from './firebaseConfig.js'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import Shop from './components/Shop/Shop.jsx';
import SearchProduct from './components/Search/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: App },
      { path: "wishlist", Component: Wishlist },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "*", Component: NotFound },
      { path: "profile", Component: Profile },
      { path: "product/details/:id", Component: ProductDetails },
      { path: "register", Component: Register },
      { path: "login", Component:Login},
      { path: "category/product/:slug", Component:CategoryProduct},
      { path: "shop", Component:Shop},
      { path: "search/product/:keyword", Component:SearchProduct},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />,
    </Provider>
)
