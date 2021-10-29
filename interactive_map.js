var stateList = [].slice.call(document.querySelectorAll('.state'));
var popoverHandleList = [].slice.call(document.querySelectorAll('.popover-handle'));

stateList.map(state => {
	new bootstrap.Tooltip(state, {
		placement: 'auto',  
		title: state.getAttribute("state-name"),
		trigger: 'hover focus'
	});
});

popoverHandleList.map(popoverHandle => {
	new bootstrap.Popover(popoverHandle, {    
		content: popoverHandle.getAttribute("state-policy"),
		title: popoverHandle.getAttribute("state-name"),
		placement: 'auto',
		trigger: 'focus',
		html: true,
		container: 'body'
	});
});

$('.state').on('click', function() {
	var clickedState = document.getElementById(this.id);
	var tooltip = bootstrap.Tooltip.getInstance(clickedState);
	tooltip.hide();
});