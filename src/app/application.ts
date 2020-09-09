import factory from 'mxgraph';
export class Application {

  constructor(container: HTMLElement) {
    (window as any)['mxBasePath'] = 'assets/mxgraph';
    const { mxGraph, mxClient } = factory({
      // not working see https://github.com/jgraph/mxgraph/issues/479
      mxBasePath: 'assets/mxgraph',
    });

    if(mxClient.isBrowserSupported()) {
      console.log('Yes! Yes!');
    }

    const graph = new mxGraph(container);
    const model = graph.getModel();
    model.beginUpdate();
    try {
      graph.insertVertex(graph.getDefaultParent(), '', 'TEST', 0, 0, 100, 100);
    } finally {
      model.endUpdate();
    }
  }

}
