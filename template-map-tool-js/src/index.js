import * as maptalks from 'maptalks'

/**
 * @example
 * 
 * const customTool = new CustomTool().addTo(map);
 */
const CustomTool = maptalks.MapTool.extend({
    initialize: function () {},

    //add an temporary VectorLayer to draw markers.
    onEnable: function () {
        const layerId = maptalks.internalLayerPrefix + '_marker_map_tool';
        this._markerLayer = new maptalks.VectorLayer(layerId)
            .addTo(this.getMap());
    },

    //the event listeners to add to the map
    getEvents: function () {
        return {
            'click': this._onClick,
            'contextmenu': this._onRighClick
        };
    },

    // remove the temporary VectorLayer when disabled
    onDisable: function () {
        if (this._markerLayer) {
            this.getMap().removeLayer(this._markerLayer);
        }
    },

    //click to add markers
    _onClick: function (param) {
        this._markerLayer.addGeometry(new maptalks.Marker(param.coordinate));
    },

    //right click to clear the layer
    _onRighClick: function (param) {
        this._markerLayer.clear();
    }
});

export default CustomTool