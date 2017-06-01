/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import cx from 'classnames';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const { className, ...other } = this.props;
    return (
      <nav
        ref={node => { this.root = node; }}
        className={cx('mdl-navigation', className)} {...other}
      >
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <Link className="mdl-navigation__link" to="/about">About</Link>
        {/*<Link className="mdl-navigation__link" to="/not-found">Not Found</Link>*/}
      </nav>
    );
  }

}

export default Navigation;
