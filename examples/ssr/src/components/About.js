import React, {Component} from 'react';
import { withActions } from 'react-router-dispatcher';
import getMetadataAction from 'react-router-metadata-action';

class About extends Component {

  static getMetadata(/*match, props*/) {
    return {
      title: 'About Page'
    };
  }

  render() {
    return (
      <div>
        <h1>About what?</h1>
      </div>
    );
  }
}

export default withActions(getMetadataAction())(About);
