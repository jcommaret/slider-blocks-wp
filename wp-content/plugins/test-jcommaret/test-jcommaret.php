<?php
/**
 * Plugin Name:       Citeo Blocks
 * Description:       Citeo Extension for bloc 1 & 2
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           citeo.test
 * Author:            Jérôme Commaret
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-jcommaret
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_test_jcommaret_block_init() {
    register_block_type( __DIR__ . '/build/main-bloc' );
    register_block_type( __DIR__ . '/build/button-with-arrow' );
    register_block_type( __DIR__ . '/build/slider' );

    
}





add_action( 'init', 'create_block_test_jcommaret_block_init' );

add_action('enqueue_block_assets', function (): void {
    wp_enqueue_style('dashicons');
});

