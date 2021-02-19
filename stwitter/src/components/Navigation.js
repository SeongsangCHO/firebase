import { React } from 'react';
import {Link} from 'react-router-dom';
import './Navigation.module.css';


const Navigation = ( {userObj} ) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">{userObj.displayName}'s Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;