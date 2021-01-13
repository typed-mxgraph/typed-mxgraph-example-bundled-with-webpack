import mx from './mxgraph';
import { mxGraph, mxGraphModel } from 'mxgraph';

export class Application {

  constructor(container: HTMLElement) {
    if(mx.mxClient.isBrowserSupported()) {
      console.log('Yes! Yes!');
    }

    const graph: mxGraph = new mx.mxGraph(container);
    const model: mxGraphModel = graph.getModel();
    model.beginUpdate();
    try {
      graph.insertVertex(graph.getDefaultParent(), '', 'TEST', 0, 0, 100, 100);
    } finally {
      model.endUpdate();
    }
  }

}
