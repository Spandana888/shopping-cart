import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Heading from "./compoments/heading";
import Footer from "./compoments/footer"
import Products from "./compoments/products";
import Cart from "./compoments/cart";
import Home from "./compoments/home";
import SignIn from "./compoments/signIn";
import Register from "./compoments/register";

function App() {
  return (
    <BrowserRouter className="App">
      <Heading />
      <div>
        <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/products' exact element={<Products />} />
         <Route path='/cart' exact element={<Cart />} />
         <Route path='/signIn' exact element={<SignIn />} />
         <Route path='/register' exact element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
