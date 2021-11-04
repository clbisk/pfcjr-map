<?php
/*
Plugin Name: Interactive Map for pfcjreform.org
Description: an interactive policy map designed by Heewon Park and implemented by Cecilia Bisk
Author: Cecilia Bisk, Heewon Park
Version: 1.1
*/

namespace Interactive_Policy_Map;

use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'elementor/controls/controls_registered', function() {
	require_once( 'text_with_links_control.php');
	Plugin::instance()->controls_manager->register_control('textwithlinks', new Text_With_Links_Control() );
});

add_action( 'elementor/widgets/widgets_registered', function() {
    require_once( 'map_widget.php' );
	Plugin::instance()->widgets_manager->register_widget_type( new Map_Widget() );
});
?>