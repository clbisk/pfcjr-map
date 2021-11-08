jQuery(document).ready(function ($) {
	// URL Modal
	var urlModal = '<div class=\'target-link modal fade\' id="target-link-modal-' + uid + '" tabindex="-1" role="dialog" aria-hidden="true">' +
		'	<div class="modal-dialog" role="document"><div class="modal-content">' +
		'		<div class="modal-header">' +
		'			<div>Input Link URL</div>' +
		'		</div>' +
		'		<div class="modal-body">' +
		'			<input class="target-link-input" placeholder=\'www.example.com\' type=\'text\' aria-label=\'link URL\'/>' +
		'		</div>' +
		'		<div class="modal-footer">' +
		'			<button type="button" class="btn btn-primary btn-sm">Create Link</button>' +
		'		</div>' +
		'	</div></div>' +
		'</div>';

	$('body').append(urlModal);
	console.log('url modal added');
	console.log(urlModal);
});


function openLinkCreator() {
	jQuery(document).ready(function ($) {
		console.log(".link-button click registered");
		$('.link-button button').attr('disabled', true);
		$('.target-link button').attr('disabled', false);
		$('.target-link').show();
	});
}

var textWithLinksView = elementor.modules.controls.BaseData.extend({
	onReady: function () {
		var highlighted = null;
		var uid = this.get_control_uid();

		jQuery(document).ready(function ($) {
			// URL Modal
			var urlModal = '<div class=\'target-link modal fade\' id="target-link-modal-' + uid + '" tabindex="-1" role="dialog" aria-hidden="true">' +
				'	<div class="modal-dialog" role="document"><div class="modal-content">' +
				'		<div class="modal-header">' +
				'			<div>Input Link URL</div>' +
				'		</div>' +
				'		<div class="modal-body">' +
				'			<input class="target-link-input" placeholder=\'www.example.com\' type=\'text\' aria-label=\'link URL\'/>' +
				'		</div>' +
				'		<div class="modal-footer">' +
				'			<button type="button" class="btn btn-primary btn-sm">Create Link</button>' +
				'		</div>' +
				'	</div></div>' +
				'</div>';

			$('body').append(urlModal);
			console.log('url modal added');
			console.log(urlModal);
		});
	},

	saveHighlighted: function () {
		jQuery(document).ready(function ($) {
			console.log("saving highlighted");

			if (window.getSelection) {
				this.highlighted = window.getSelection();
			} else if (document.selection && document.selection.type != "Control") {
				this.highlighted = document.selection.createRange();
			} else {
				this.highlighted = null;
			}

			highlightedText = highlighted.getText();
			console.log(highlightedText);
		});
	},

	saveValue: function () {
		jQuery(document).ready(function ($) {
			var descriptionText = $('.elementor-control-tag-area').val();
			this.setValue(descriptionText);
		});
	},

	onBeforeDestroy: function () {
		this.saveValue();
	}
});

elementor.addControlView('textwithlinks', textWithLinksView);