<?php
/*
Plugin Name: Interactive Map for pfcjreform.org
Description: an interactive policy map created by Heewon Park
 */

class map_widget extends WP_Widget { 
    function __construct() {
        parent::__construct(
            'interactive_policy_map_widget',
            __('interactive_policy_map_widget', 'map_widget_domain'),
            array('description' => __('empty description.', 'map_widget_domain'))
        );
    }
    
    // Creating widget front-end
    public function widget( $args, $instance ) {
        $title = apply_filters('widget_title', $instance['title']);

        // before and after widget arguments are defined by themes
        echo $args['before_widget'];
        if ( ! empty( $title ) )
            echo $args['before_title'] . $title . $args['after_title'];
        
        // This is where you run the code and display the output
        echo __( 'Hello, World!', 'map_widget_domain' );
        echo $args['after_widget'];
    }
            
    // Creating widget Backend
    public function form( $instance ) {
        if ( isset( $instance[ 'title' ] ) ) {
            $title = $instance[ 'title' ];
        }
        else {
            $title = __( 'New title', 'map_widget_domain' );
        }

?>
	<p>
        <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
	</p>
<?php 
    }
        
    // Updating widget replacing old instances with new
    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        return $instance;
    }
 
}

// Register and load the widget
function wpb_load_widget() {
    register_widget( 'map_widget' );
}
add_action( 'widgets_init', 'wpb_load_widget' );

// function enable_interactive_map_js() {
// 	$dependencies = array();
	
// 	wp_register_script('interactive_map', plugins_url('original_interactive_map.js', __FILE__),
// 					  $dependencies, '1.1', false);

//     wp_register_style('interactive_map_style', plugins_url('original_interactive_map_style.css', __FILE__),
// 					  $dependencies, '1.1', false);

// 	wp_enqueue_script('interactive_map');
//     wp_enqueue_style('interactive_map_style');
// }

// add_action('wp_enqueue_scripts', 'enable_interactive_map_js');

?>