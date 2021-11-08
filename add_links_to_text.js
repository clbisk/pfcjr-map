function openLinkCreator() {
	jQuery(document).ready(function($) {
		console.log(".link-button click registered");
		$('.link-button button').attr('disabled', true);
		$('.target-link button').attr('disabled', false);
		$('.target-link').show();
	});
}

var textWithLinksView = elementor.modules.controls.BaseData.extend({
	onReady: function () {
		jQuery(document).ready(function($) {
			$('body').popover({
				placement: 'left',
				html: true,
				container: 'body',
				selector: '.link-button'
			});
		});
	},

	saveValue: function () {
		jQuery(document).ready(function($) {
			var descriptionText = $('.elementor-control-tag-area').val();
			this.setValue(descriptionText);
		});
	},

	onBeforeDestroy: function () {
		this.saveValue();
	}
});

elementor.addControlView('textwithlinks', textWithLinksView);

function linkHighlighted() {
	jQuery(document).ready(function($) {
		var highlighted = "";

		if (window.getSelection) {
			highlighted = window.getSelection();
		} else if (document.selection && document.selection.type != "Control") {
			highlighted = document.selection.createRange();
		}

		highlightedText = highlighted.getText();
		console.log(highlightedText);

		var prevText = $('.elementor-control-tag-area').val();
		

		$('.target-link').hide();
	});
}