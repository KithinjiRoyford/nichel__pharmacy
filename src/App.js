import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GetProducts from './components/GetProducts';
import MakePayment from './components/MakePayment';
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.min.js"
import AddProductComponent from './components/AddProductComponent';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <div className="App">
      <header className="App-header">
      <h1>Nichel Pharmacy</h1>
      </header>
    </div>

    <Routes>
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/' element={<GetProducts/>} />
      <Route path='/addproduct' element={<AddProductComponent/>} />
      <Route path='/makepayment' element={<MakePayment/>} />
      <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
