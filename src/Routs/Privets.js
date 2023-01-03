import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Privets = ({children}) => {

      const {user, loding} = useContext(AuthContext);
      if(loding){
            return <button className="btn btn-square loading"></button>
      }
      if(user && user.uid){
            return children
      }
      return <Navigate to={"/login"}></Navigate>

     
};

export default Privets;