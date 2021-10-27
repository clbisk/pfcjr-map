<?php
/*
Plugin Name: Interactive Map for pfcjreform.org
Description: an interactive policy map created by Heewon Park
 */

namespace Interactive_Policy_Map;

use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'elementor/widgets/widgets_registered', function() {
    require_once( 'map_widget.php' );
	Plugin::instance()->widgets_manager->register_widget_type( new Map_Widget() );
});
?>