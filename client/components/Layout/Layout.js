/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from './Header';
import Link from '../Link';
import Navigation from './Navigation';
import Logo from './Logo';
import s from './Layout.css';
import Stars from '../Stars';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" ref={node => { this.root = node; }}>
        {/*<div className="mdl-layout__header">
          <div className={`mdl-layout__header-row ${s.headerRow}`}>
            <Link className="mdl-layout-title" to="/">
              <Logo height={48} />
            </Link>
            <div className="mdl-layout-spacer" />
            <Navigation className='mdl-layout--large-screen-only'/>
          </div>
        </div>*/}
        <Header/>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        {/*<div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <Navigation />
        </div>*/}
        <div className="mdl-layout__inner-container">
          <main {...this.props} className={s.content} />
          
        </div>
        <Stars/>
      </div>
    );
  }
}

export default Layout;
