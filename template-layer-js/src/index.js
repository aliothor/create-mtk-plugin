import * as maptalks from 'maptalks'

export default class MyLayer extends maptalks.Layer {}

class MyLayerRenderer extends maptalks.renderer.CanvasRenderer {}

MyLayer.registerRenderer('canvas', MyLayerRenderer);