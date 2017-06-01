/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import styles from './WebsiteCard.css';
import { Chip } from 'react-mdl';
import cx from 'classnames';

class WebsiteCard extends React.Component {

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
    const { className, title, desc, year, tech, link, img, youtube, ...other } = this.props;
    var el = null;
    if (img) {
      el = (<img className={'article-image ' + styles.media} src={img}/>);
    } else if (youtube) {
      el = (<iframe className={'article-image ' + styles.media} src={youtube} frameBorder="0" allowFullScreen></iframe>);
    }

    return (
      <div 
        ref={node => { this.root = node; }}
        className={cx('mdl-cell mdl-card mdl-shadow--4dp', className, styles.card)} {...other}
      >
          <div className='mdl-card__media'>
            {el}
          </div>
          <div className={'mdl-card__title ' +styles.title}>
            <h2 className="mdl-card__title-text">{title}&nbsp;</h2>
            <p className="mdl-card__subtitle-text">{year}</p>
          </div>
          <div className={'mdl-card__supporting-text text-color-secondary ' +styles.description}>
            {desc}
          </div>
          <div className={styles.wrapper}>
            {tech.map((t) => (
              <Chip key={t} className={styles.chip}>
                {t}
              </Chip>
            ))}
          </div>
          <div className='mdl-card__actions mdl-card--border'>
            <a className='mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect' href={link} target="_blank">View <i className="material-icons">open_in_new</i></a>
          </div>
      </div>
    );
  }
}

export default WebsiteCard;
