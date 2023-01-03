import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Privets from './Routs/Privets';
import Order from './Components/Order';

function App() {
  const router = createBrowserRouter([
    {path : "/", element : <Header></Header>, children : [
      {path : "/", element : <Home></Home>},
      {path : "/home", element : <Home></Home>},
      {path : "/order", element : <Privets><Order></Order></Privets>},
      {path : "/login", element : <Login></Login>},
      {path : "/register", element : <Register></Register>},
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
