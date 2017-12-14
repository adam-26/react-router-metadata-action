import React, {Component} from 'react';
import { withActions } from 'react-router-dispatcher';
import getMetadataAction from 'react-router-metadata-action';

class Home extends Component {

  static getMetadata(/*match, props*/) {
    return {
      title: 'Homepage Title'
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  }
}

export default withActions(getMetadataAction())(Home);
