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
		var highlighted = "";
	},

	saveHighlighted: function () {
		jQuery(document).ready(function($) {
			if (window.getSelection) {
				this.highlighted = window.getSelection();
			} else if (document.selection && document.selection.type != "Control") {
				this.highlighted = document.selection.createRange();
			} else {
				this.highlighted = "";
			}
	
			highlightedText = highlighted.getText();
			console.log(highlightedText);
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