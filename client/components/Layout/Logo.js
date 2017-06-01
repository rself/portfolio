/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

function Logo({ width, height, className, ...other }) {
  return (
    <img className={'mdl-list__item-avatar ' + className} src='rself-games-r.jpg'/>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;
