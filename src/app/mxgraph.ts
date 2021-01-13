import factory from 'mxgraph';

(window as any)['mxBasePath'] = 'assets/mxgraph';

const { mxGraph, mxClient, mxRectangleShape } = factory({
  // not working see https://github.com/jgraph/mxgraph/issues/479
  mxBasePath: 'assets/mxgraph',
});

export { mxGraph, mxClient, mxRectangleShape };
