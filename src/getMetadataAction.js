// @flow
import { Metadata } from 'react-html-metadata';
import withReactRouterMetadata from 'react-router-metadata';

export const GET_METADATA = 'GET_METADATA_ACTION';

export default function getMetadataAction(
    paramsToProps?: (params: Object, routerCtx: Object) => Object = () => {},
    metadataOpts?: {
        metadataActionName?: string,
        staticMethodName?: string,
        actionParamName?: string
    }) {
    return {
        name: GET_METADATA,

        staticMethodName: 'preloadMetadata',

        initServerAction: ({ metadata }) => ({
            metadata: metadata || Metadata.createNew()
        }),

        initClientAction: ({ metadata }) => ({
            metadata: metadata || Metadata.createForHydration()
        }),

        mapParamsToProps: (params, routerCtx) => ({
            ...paramsToProps(params, routerCtx),
            metadata: params.metadata
        }),

        hoc: (Component) => withReactRouterMetadata(params => params, metadataOpts)(Component)
    };
}
