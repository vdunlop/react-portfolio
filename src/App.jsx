// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
//import Form from './components/Form';
//import Header from "./components/Header";
//import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  //      <Form /> add this and the form goes in every tab

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
