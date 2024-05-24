import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux'; // Import Provider
import appStore from './Utils/AppStore'; // Import your Redux store
import Cart from './Routers/Card';
import Contacts from './Routers/Contact';
import Appought from './Components/Food';
import Error from './Routers/Error';
import ResturentsMenu from './Routers/RestruentsMenu';

function App() {
  const Grocary = lazy(()=> import("./Components/Grocary"))
  const About = lazy(()=> import("./Routers/About"))
  return (
    <Provider store={appStore}> {/* Wrap your entire app with Provider */}
      <Router>
        <Routes>
          <Route path='/Grocary' element={<Suspense fallback={<h1>Loading...</h1>}><Grocary/></Suspense>} />
          <Route path="/" element={<Appought />} />
          <Route path="/About" element={<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>} />
          <Route path='/Contacts' element={<Contacts/>} />
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='*' element={<Error/>} />
          <Route path='/restruents/:resID' element={<ResturentsMenu/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
