import Home from "./routes/home/home.jsx"
import Navigation from "./routes/navigation/navigation.jsx"
import {Routes, Route  } from 'react-router-dom'  // must be nested in a BrowserRouter component
import Authentication from "./routes/authentication/authentication.jsx"
import Shop from "./routes/shops/shop.jsx"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;


// to be fixed:
// displayName : null in firebase
// signin google