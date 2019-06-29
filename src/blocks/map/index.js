/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";
// import save from "./save";
import metadata from "./block.json";
import { MapIcon } from "../utils";

const { name, attributes, category } = metadata;
const settings = {
  title: __("Google Map"),
  icon: MapIcon,
  category,
  description: __("Embed a Google map."),
  keywords: [__("google"), __("map")],
  attributes,
  edit,
  save: () => null
};

export { metadata, name, settings };
