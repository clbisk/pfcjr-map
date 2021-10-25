<?php
function enable_interactive_map_js() {
	$dependencies = array();
	
	wp_register_script('interactive_map', plugins_url('original_interactive_map.js', __FILE__),
					  $dependencies, '1.1', false);
	
	wp_enqueue_script('interactive_map');

    wp_register_style('interactive_map_style', plugins_url('original_interactive_map_style.js', __FILE__),
					  $dependencies, '1.1', false);

    wp_enqueue_style('interactive_map_style');
}

add_action('wp_enqueue_scripts', 'enable_interactive_map_js');
?>