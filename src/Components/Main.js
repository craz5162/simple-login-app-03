import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Main = () => {

      const {user, logout} = useContext(AuthContext);
      console.log(user)

      const  hendelsingin =()=>{
            logout()
            .then(()=>{

            })
            .catch(error =>{
                  console.error(error)
            })
      }

      return (
            <div>
                  <div className="navbar bg-primary text-primary-content">
                        <a className="btn btn-ghost normal-case text-3xl">arfat</a>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/home"}>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/order"}>Order</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>Login</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link>
                        {user?.email && <p>{user.email}</p>}
                        {
                              user?. email ? 
                              <button onClick={hendelsingin} className="btn btn-sm ml-5">Log out</button>
                              :
                              <Link to={"/login"}><button className="btn btn-sm">Login</button></Link>
                        }
                        
                  </div>
            </div>
      );
};

export default Main;