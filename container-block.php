<?php
/**
 * The `Container Block` bootstrap file.
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 * 
 * Container Block is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * @link              		https://www.mypreview.one
 * @since             		1.0.0
 * @package           		container-block
 * @author     		  		MyPreview (Github: @mahdiyazdani, @mypreview)
 * @copyright 		  		© 2015 - 2019 MyPreview. All Rights Reserved.
 *
 * @wordpress-plugin
 * Plugin Name:       		Container Block
 * Plugin URI:        		https://www.mypreview.one
 * Description:       		Add additional terms and condition checkbox to the WooCommerce checkout.
 * Version:           		1.0.0
 * Author:            		MyPreview
 * Author URI:        		https://www.mypreview.one
 * License:           		GPL-3.0
 * License URI:       		http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:       		container-block
 * Domain Path:       		/languages
 */
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    wp_die();
} // End If Statement

/**
 * Gets the path to a plugin file or directory.
 * @see 	https://codex.wordpress.org/Function_Reference/plugin_basename
 * @see 	http://php.net/manual/en/language.constants.predefined.php
 */
define( 'CONTAINER_BLOCK_FILE', __FILE__ );
define( 'CONTAINER_BLOCK_BASENAME', basename( CONTAINER_BLOCK_FILE ) );
define( 'CONTAINER_BLOCK_PLUGIN_BASENAME', plugin_basename( CONTAINER_BLOCK_FILE ) );
define( 'CONTAINER_BLOCK_DIR_URL', plugin_dir_url( CONTAINER_BLOCK_FILE ) );
define( 'CONTAINER_BLOCK_DIR_PATH', plugin_dir_path( CONTAINER_BLOCK_FILE ) ); 

if ( ! class_exists( 'Container_Block' ) ) :

	/**
	 * The Container Block - Class
	 */
	final class Container_Block {

		/**
         * Instance of the class.
         * 
         * @var  object   $_instance
         */
		private static $_instance = NULL;

		/**
		 * Main `Container_Block` instance
		 * Ensures only one instance of `Container_Block` is loaded or can be loaded.
		 *
		 * @access 	public
		 * @return  instance
		 */
		public static function instance() {

			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			} // End If Statement

			return self::$_instance;

		}

		/**
		 * Setup class.
		 *
		 * @access 	protected
		 * @return  void
		 */
		protected function __construct() {

			add_action( 'init', 																	array( $this, 'textdomain' ), 				10 );
			add_action( 'enqueue_block_editor_assets', 												array( $this, 'editor_enqueue' ), 			10 );
			add_filter( sprintf( 'plugin_action_links_%s', CONTAINER_BLOCK_PLUGIN_BASENAME ), 		array( $this, 'additional_links' ), 	 10, 1 );

		}

		/**
		 * Cloning instances of this class is forbidden.
		 *
		 * @access 	protected
		 * @return  void
		 */
		protected function __clone() {

			_doing_it_wrong( __FUNCTION__, _x( 'Cloning instances of this class is forbidden.', 'clone', 'container-block' ) , CONTAINER_BLOCK_VERSION );

		}

		/**
		 * Unserializing instances of this class is forbidden.
		 *
		 * @access 	public
		 * @return  void
		 */
		public function __wakeup() {

			_doing_it_wrong( __FUNCTION__, _x( 'Unserializing instances of this class is forbidden.', 'wakeup', 'container-block' ) , CONTAINER_BLOCK_VERSION );

		}

		/**
		 * Load languages file and text domains.
		 * Define the internationalization functionality.
		 *
		 * @access 	public
		 * @return  void
		 */
		public function textdomain() {

			load_plugin_textdomain( 'container-block', FALSE, dirname( dirname( CONTAINER_BLOCK_PLUGIN_BASENAME ) ) . '/languages/' );

		}

		/**
	     * Register the JavaScript for the Gutenberg editor area.
	     *
	     * @access   public
	     * @return   void
	     */
		public function editor_enqueue() {

			$vendors_path = sprintf( '%sassets/dist/admin/vendors.js', CONTAINER_BLOCK_DIR_PATH );
			$vendors_asset_path = sprintf( '%sassets/dist/admin/vendors.asset.php', CONTAINER_BLOCK_DIR_PATH );
			$vendors_asset = file_exists( $vendors_asset_path )  ?  require( $vendors_asset_path )  :  array( 'dependencies' => array( 'wp-blocks', 'wp-dom-ready' ), 'version' => filemtime( $vendors_path ) );
			$vendors_url = sprintf( '%sassets/dist/admin/vendors.js', CONTAINER_BLOCK_DIR_URL );
			wp_enqueue_script( 'container-block-vendors', $vendors_url, $vendors_asset['dependencies'], $vendors_asset['version'], TRUE );

			$script_path = sprintf( '%sassets/dist/admin/script.js', CONTAINER_BLOCK_DIR_PATH );
			$script_asset_path = sprintf( '%sassets/dist/admin/script.asset.php', CONTAINER_BLOCK_DIR_PATH );
			$script_asset = file_exists( $script_asset_path )  ?  require( $script_asset_path )  :  array( 'dependencies' => array( 'wp-blocks', 'wp-dom-ready' ), 'version' => filemtime( $script_path ) );
			$script_url = sprintf( '%sassets/dist/admin/script.js', CONTAINER_BLOCK_DIR_URL );
			wp_enqueue_script( 'container-block', $script_url, $script_asset['dependencies'], $script_asset['version'], TRUE );

		}

		/**
		 * Display additional links in plugins table page.
		 * Filters the list of action links displayed for a specific plugin in the Plugins list table.
		 *
		 * @access 	public
		 * @param   array 	$links
		 * @return  array 	$links
		 */
		public function additional_links( $links ) {

			$plugin_links = array();
			$plugin_links[] = sprintf( _x( '%sHire Me!%s', 'plugin link', 'container-block' ) , sprintf( '<a href="https://www.upwork.com/o/profiles/users/_~016ad17ad3fc5cce94/" class="button-link-delete" target="_blank" rel="noopener noreferrer nofollow" title="%s">', esc_attr_x( 'Looking for help? Hire Me!', 'upsell', 'container-block' ) ), '</a>' );
			$plugin_links[] = sprintf( _x( '%sSupport%s', 'plugin link', 'container-block' ) , '<a href="https://wordpress.org/support/plugin/container-block" target="_blank" rel="noopener noreferrer nofollow">', '</a>' );

			return array_merge( $plugin_links, $links );

		}

	}
endif;

/**
 * Returns the main instance of Container_Block to prevent the need to use globals.
 *
 * @return  object(class) 	Container_Block::instance
 */
if ( ! function_exists( 'woo_additional_terms_init' ) ) :
	
	function woo_additional_terms_init() {

		return Container_Block::instance();

	}

	woo_additional_terms_init();
endif;