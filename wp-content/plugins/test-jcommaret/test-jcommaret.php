<?php
/**
 * Plugin Name:       Citeo Blocks
 * Description:       Citeo Extension for wp-blocks, check it out with Citeo 
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           citeo 1.beta
 * Author:            Jérôme Commaret
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-jcommaret
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function register_blocks() {
    register_block_type( __DIR__ . '/build/main-bloc' );
    register_block_type( __DIR__ . '/build/button-with-arrow' );
    register_block_type( __DIR__ . '/build/slider' );
}

add_action( 'init', 'register_blocks' );