import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login1';
import Signup from './components/signup';
import Home from './components/home';
import InsuranceApplication from './components/lifeInsurance';
import Summary from './components/summary';
import Policies from './components/policies';
import About from './components/about';
import Contact from './components/contact';
import HomeInsurance from './components/Home Insure/homeInsurance';
import HomePolicy from './components/Home Insure/homplolicy';
import Payment from './components/payment';
import InsuranceComparison from './components/compare';
import { Provider } from 'react-redux';
import store from './components/store';
function App() {
  return (
      
    <Provider store={store}>
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/lifeInsurance' element={<InsuranceApplication/>}/>
      <Route path='/summary' element={<Summary/>}/>
      <Route path='/policies' element={<Policies/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/homeInsurance' element={<HomeInsurance/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/homepolicy' element={<HomePolicy/>}/>
      <Route path='/compare' element={<InsuranceComparison/>}/>
      </Routes>
    </Router>
    </Provider>
 
  );
}

export default App