/**
 * External dependencies
 */
import GoogleMapReact from "google-map-react";

/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { getCenter, getRatio, Marker } from "./blocks/utils";

(() => {
  [].forEach.call(
    document.querySelectorAll("script.wp-block-loganstellway-google-map"),
    map => {
      const attributes = JSON.parse(map.innerHTML);
      const { apiKey, x, y, lat, lng, zoom, markers, minHeight } = attributes;

      if (apiKey && x && y && lat && lng && zoom && markers && markers.length) {
        const content = (
          <Fragment>
            <div
              style={{
                paddingTop: `${getRatio(x, y)}%`,
                minHeight: minHeight
              }}
            />
            <div className="map-container">
              <GoogleMapReact
                defaultCenter={getCenter(attributes)}
                defaultZoom={zoom}
                bootstrapURLKeys={{ key: apiKey }}
              >
                {markers.map((marker, index) => {
                  const { lat, lng, description } = marker;

                  return (
                    <Marker
                      key={index}
                      lat={lat}
                      lng={lng}
                      description={description}
                    />
                  );
                })}
              </GoogleMapReact>
            </div>
          </Fragment>
        );

        const el = document.createElement("div");
        el.className = map.className;
        map.parentNode.replaceChild(el, map);
        ReactDOM.render(content, el);
      }
    }
  );
})();
