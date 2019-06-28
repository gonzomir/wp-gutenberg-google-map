<?php

/**
 * Plugin Name: Logan Stellway - Google Maps for Gutenberg
 * Plugin URI: www.loganstellway.com
 * Description: Plugin to add Google map blocks for Gutenberg
 * Version: 1.0
 * Author: Logan Stellway
 * Author URI: www.loganstellway.com
 * License: GNU GPL v2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace LoganStellway\Gutenberg\Google\Maps;

// Prevent direct access to script
defined( 'ABSPATH' ) or die();

if ( ! class_exists('\LoganStellway\Gutenberg\Google\Maps\Blocks') ) {
    class Blocks
    {
        public function __construct() {
            add_action( 'init', array( $this, 'registerBlock' ) );
        }

        /**
         * Initialize 
         */
        public function registerBlock()
        {
            // Editor Script
            wp_register_script(
                'loganstellway-google-maps-editor',
                plugins_url( 'build/index.js', __FILE__ ),
                array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
                true
            );

            // Clinet Script
            wp_register_script(
                'loganstellway-google-maps-client',
                plugins_url( 'build/frontend.js', __FILE__ ),
                array('wp-element'),
                filemtime( plugin_dir_path( __FILE__ ) . 'build/frontend.js' ),
                true
            );

            // Editor Style
            wp_register_style(
                'loganstellway-google-maps-editor',
                plugins_url( 'build/editor.css', __FILE__ ),
                array( 'wp-edit-blocks' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
            );
        
            // Client Style
            wp_register_style(
                'loganstellway-google-maps-client',
                plugins_url( 'build/client.css', __FILE__ ),
                array( 'wp-edit-blocks' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'build/client.css' )
            );
        
            // Register block
            register_block_type( 'loganstellway/google-maps', array(
                'style' => 'loganstellway-google-maps-client',
                'script' => 'loganstellway-google-maps-client',
                'editor_style' => 'loganstellway-google-maps-editor',
                'editor_script' => 'loganstellway-google-maps-editor',
            ) );
        }
    }

    new Blocks();
}
