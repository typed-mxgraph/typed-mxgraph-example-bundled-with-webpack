import { mxClient, mxGraph } from './mxgraph';

export class Application {

  constructor(container: HTMLElement) {
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
