<?php
namespace Interactive_Policy_Map;

use Elementor\Base_Data_Control;

class Text_With_Links_Control extends Base_Data_Control {

	public function get_type() {
		return 'textwithlinks';
	}

	public function enqueue() {
		// styles
		wp_enqueue_style('textwithlinks', plugins_url('textwithlinks.css', __FILE__), array(), '2.2.1');

		wp_enqueue_style('bootstrap-css', '//cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css');

		// scripts
		wp_enqueue_script('jquery', '//code.jquery.com/jquery-3.6.0.min.js');

		wp_enqueue_script('bootstrap', '//code.jquery.com/jquery-3.5.1.slim.min.js', array('jquery'), '4.5.3', true);

		$my_script_dependencies = array('jquery', 'bootstrap');
		wp_enqueue_script('add_links_to_text', plugins_url('add_links_to_text.js', __FILE__),
		$my_script_dependencies, '2.10', true);
	}

	protected function get_default_settings() {
		return [
			'label_block' => true,
			'rows' => 3
		];
	}

	public function content_template() {
		$control_uid = $this->get_control_uid();

		$link_popover = '"tomato"';

		echo '<div class="elementor-control-field">';

		echo '  <div class="toolbar">';
		echo '      <label for="' . esc_attr( $control_uid ) . '" class = "elementor-control-title">{{{ data.label }}}</label>';
		echo '      <div class=\'target-link\' style="display: none;">';
		echo '			<input class="target-link-input" placeholder=\'www.example.com\' type=\'text\' aria-label=\'link URL\'/>';
		echo '			<button type="button" class="btn btn-primary btn-sm" onclick=\'linkHighlighted()\' disabled="true">Create Link</button>';
		echo '		</div>';

		echo '		<div class="link-button">';
		echo '			<button onclick="openLinkCreator()" type="button" class="btn btn-outline-info" data-bs-toggle="popover" title="Link URL:" ';
		echo '			data-bs-content=' . $link_popover . '>';
		echo '				<i class="fas fa-link fa-xs"></i>';
		echo '          </button>';
		echo '      </div>';
		echo '  </div>';

		echo '  <div class="elementor-control-input-wrapper">';
		echo '      <textarea id="' . esc_attr( $control_uid ) . '" class="elementor-control-tag-area" rows="{{ data.rows }}"';
		echo '      data-setting="{{ data.name }}" placeholder="{{ data.placeholder }}">';
		echo '      </textarea>';
		echo '  </div>';

		echo '</div>';
	}
}