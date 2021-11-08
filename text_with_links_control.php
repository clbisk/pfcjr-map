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

		wp_enqueue_style('bootstrap-css', '//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
		
		// scripts
		wp_enqueue_script('jquery', '//code.jquery.com/jquery-3.6.0.min.js');

		wp_enqueue_script('bootstrap', '//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.1.3', true);

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

		$link_modal = 
		$link_popover = '"tomato"';

		echo '<div class="elementor-control-field">';

		echo '  <div class="toolbar">';
		echo '      <label for="' . esc_attr( $control_uid ) . '" class = "elementor-control-title">{{{ data.label }}}</label>';

		echo '		<div class="link-button" onclick="saveHighlighted()">';
		echo '			<button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#target-link-modal">';
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

		// URL Modal
		echo '<div class=\'target-link modal fade\' id="target-link-modal" tabindex="-1" role="dialog" aria-hidden="true">';
		echo '	<div class="modal-dialog" role="document"><div class="modal-content">';
		echo '		<div class="modal-header">';
		echo '			<div>Input Link URL</div>';
		echo '		</div>';
		echo '		<div class="modal-body">';
		echo '			<input class="target-link-input" placeholder=\'www.example.com\' type=\'text\' aria-label=\'link URL\'/>';
		echo '		</div>';
		echo '		<div class="modal-footer">';
		echo '			<button type="button" class="btn btn-primary btn-sm" onclick=\'createLink()\'>Create Link</button>';
		echo '		</div>';
		echo '	</div></div>';
		echo '</div>';
	}
}