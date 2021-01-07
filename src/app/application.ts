import mx from './mxgraph';
import { mxGraph, mxGraphModel } from 'mxgraph';
import { registerCustomShapes } from './custom-shapes';

export class Application {

  constructor(container: HTMLElement) {
    if(mx.mxClient.isBrowserSupported()) {
      console.log(`Browser supported by mxGraph ${mx.mxClient.VERSION}!`);
    }

    registerCustomShapes();

    // Typescript is able to infer the mxGraph types in this case, so you could omit them.
    // They are used here to demonstrate how you can import them.
    const graph: mxGraph = new mx.mxGraph(container);
    const model: mxGraphModel = graph.getModel();
    model.beginUpdate();
    try {
      const parent = graph.getDefaultParent();
      // TODO we should be able to pass null for the id (see https://github.com/typed-mxgraph/typed-mxgraph/pull/23)
      graph.insertVertex(parent, '1', 'a regular rectangle', 10, 10, 100, 100);
      graph.insertVertex(parent, '2', 'a regular ellipse', 150, 50, 50, 50, `shape=${mx.mxConstants.SHAPE_ELLIPSE};fill=orange`);
      // insert vertices using custom shapes
      graph.insertVertex(parent, '11', 'a custom rectangle', 20, 200, 100, 100, 'shape=customRectangle');
      graph.insertVertex(parent, '12', 'a custom ellipse', 150, 350, 70, 70, 'shape=customEllipse');
    } finally {
      model.endUpdate();
    }
  }

}
