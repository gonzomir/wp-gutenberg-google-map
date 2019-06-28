/**
 * WordPress Dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Blocks
 */
import * as map from "./blocks/map";

[map].forEach(block => {
  if (!block) return;
  const { settings, name } = block;
  registerBlockType(name, settings);
});
