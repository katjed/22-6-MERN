import React from 'react';

// Import Style
// import styles from './Navigation.css';

const Navigation = () => {
  	return (
    	<div className={styles.navigation}>
      		<Link to='/home'>
        		Home
      		</Link>
      		<Link to='/'>
        		Posts
      		</Link>
      		<Link to='/about'>
        		About
      		</Link>
    	</div>
  	);
};

export default Navigation;