# react-router-metadata-action

[![npm](https://img.shields.io/npm/v/react-router-metadata-action.svg)](https://www.npmjs.com/package/react-router-metadata-action)
[![npm](https://img.shields.io/npm/dm/react-router-metadata-action.svg)](https://www.npmjs.com/package/react-router-metadata-action)
[![CircleCI branch](https://img.shields.io/circleci/project/github/adam-26/react-router-metadata-action/master.svg)](https://circleci.com/gh/adam-26/react-router-metadata-action/tree/master)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/adam-26/react-router-metadata-action.svg)](https://codeclimate.com/github/adam-26/react-router-metadata-action)
[![Code Climate](https://img.shields.io/codeclimate/github/adam-26/react-router-metadata-action.svg)](https://codeclimate.com/github/adam-26/react-router-metadata-action)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

A [react-router-dispatcher](https://github.com/adam-26/react-router-dispatcher) **action** for defining HTML metadata.

##### This package supports:
  * server-side rendering using **stream**s
  * composing metadata from nested components (just like [react-helmet](https://github.com/nfl/react-helmet))

There is an [working example here](https://github.com/adam-26/react-router-metadata/tree/master/examples/ssr)

Internally, [react-html-metadata](https://github.com/adam-26/react-html-metadata) is used to support the use of metadata with the react SSR stream interface, for more information
about how to define metadata you should view that packages [readme file](https://github.com/adam-26/react-html-metadata).

### Usage

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { withActions } from 'react-router-dispatcher';
import getMetadataAction from 'react-router-metadata-action';

class AppRoot extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        assets: PropTypes.object.isRequired
    };

    // define metadata for this component
    static getMetadata(match, { assets }) {
        return {
            htmlAttributes: {lang: 'en', amp: undefined},
            bodyAttributes: {className: 'root'},
            titleTemplate: "MySite.com - %s",
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'shortcut icon', href: 'favicon.ico' },
                { rel: 'stylesheet', href: assets['main.css'] }
            ]
        };
    }

    render() {
        const { route: { routes } } = this.props;
        return renderRoutes(routes || null);
    }
}

// Maps react-router-dispatcher action parameters to component prop values
// - this is used for SSR and client metadata-hydration to enable correct props to be passed to 'getMetadata()'
// - the map function MUST map params to the SAME prop values the component will receive during a normal render
const mapParamsToProps = ({ assets }) => ({ assets });

export default withActions(getMetadataAction(mapParamsToProps))(Root);
```


### Install

#### NPM

```js
npm install --save react-router-metadata-action
```

#### Yarn

```js
yarn add react-router-metadata-action
```

### API

`getMetadataAction(paramsToProps)`

#### Parameters

**paramsToProps**: `(params: Object, routerCtx: Object) => Object`

  * An optional function that maps action parameters to component props

### Contribute
For questions or issues, please [open an issue](https://github.com/adam-26/react-html-metadata/issues), and you're welcome to submit a PR for bug fixes and feature requests.

Before submitting a PR, ensure you run `npm test` to verify that your coe adheres to the configured lint rules and passes all tests. Be sure to include unit tests for any code changes or additions.

### License
MIT