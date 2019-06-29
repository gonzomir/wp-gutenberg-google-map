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
  document
    .querySelectorAll("script[type='text/wp-block-loganstellway-google-map']")
    .forEach(map => {
      const attributes = JSON.parse(map.innerHTML);
      const { apiKey, x, y, lat, lng, zoom, markers, minHeight } = attributes;

      if (apiKey && x && y && lat && lng && zoom) {
        const content = (
          <Fragment>
            <div
              style={{
                paddingTop: `${getRatio(x, y)}%`,
                minHeight: minHeight
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
            >
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
        el.style.position = "relative";
        map.parentNode.replaceChild(el, map);
        ReactDOM.render(content, el);
      }
    });
})();
