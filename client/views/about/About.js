/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

class About extends React.Component {

  componentDidMount() {
    document.title = 'About Us';
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">About Us</h1>
        <p className="mdl-typography--body-1">
          Coming soon.
        </p>
        <Button className="mdl-button--fab mdl-js-ripple-effect mdl-button--colored"></Button>
      </Layout>
    );
  }

}

export default About;
