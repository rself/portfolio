import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './Stars.css';

class Stars extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const { className, ...other } = this.props;
    return (
      <div className={styles.container} ref={node => { this.root = node; }}>
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>
    );
  }
}

export default Stars;
