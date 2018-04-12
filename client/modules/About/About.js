import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  	render() {
		return (
			<div className={styles.about}>
				<h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae dolor vel nulla mollis faucibus hendrerit non augue.</p>
			</div>
		);
  }
}

const mapStateToProps = (state) => {
  	return {};
};

const mapDispatchToProps = (dispatch) => {
  	return {};
};

About.propTypes = {
};

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(About);
