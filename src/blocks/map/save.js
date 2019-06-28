/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { getRatio, getCenter, Marker } from "../utils";

/**
 * Save
 */
export default class GridSave extends Component {
  render() {
    // Props
    const { attributes, className } = this.props;

    // Attributes
    const {
      apiKey,
      zoom,
      x,
      y,
      lat,
      lng,
      markers,
      minHeight,
      addMinHeight,
      minHeightUnit
    } = attributes;

    return (
      apiKey && (
        <script
          type={`text/wp-block-loganstellway-google-map`}
          className={className}
        >
          {JSON.stringify({
            apiKey,
            zoom,
            x,
            y,
            lat,
            lng,
            markers,
            minHeight: addMinHeight ? `${minHeight}${minHeightUnit}` : undefined
          })}
        </script>
      )
    );
  }
}
