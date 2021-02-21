import { React } from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';


const Navigation = ( {userObj} ) => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/profile"className={styles.link}>{userObj.displayName}'s Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;