function linkHighlighted() {
    var highlightedText = "";

    if (window.getSelection) {
        highlightedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        highlightedText = document.selection.createRange().text;
    }
    
    console.log(highlightedText);
}

var textWithLinksView = elementor.modules.controls.BaseData.extend({
    onReady: function () {
        var popoverHandleList = [].slice.call(document.querySelectorAll('.btn-outline-info'));

        console.log(popoverHandleList);
        
        popoverHandleList.map(popoverHandle => {
            new bootstrap.Popover(popoverHandle, {
                placement: 'auto',
                html: true,
                container: 'body'
            });
        });
    },

    saveValue: function () {
        this.setValue(this.ui.textarea[0].getText());
    },

    onBeforeDestroy: function () {
        this.saveValue();
    }
});

elementor.addControlView('textwithlinks', textWithLinksView);