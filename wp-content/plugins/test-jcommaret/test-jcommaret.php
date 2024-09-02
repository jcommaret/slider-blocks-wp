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


function citeo_allowed_blocks( $allowed_blocks, $editor_context ) {
    // Liste des blocs autorisés
    $allowed_blocks = array(
        'test-jcommaret/slider',
        'test-jcommaret/main-bloc',
        'test-jcommaret/button-with-arrow'
    );
    return $allowed_blocks;
}

add_filter( 'allowed_block_types_all', 'citeo_allowed_blocks', 10, 2 );