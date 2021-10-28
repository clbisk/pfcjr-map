var stateList = [].slice.call(document.querySelectorAll('.state'));
var popoverHandleList = [].slice.call(document.querySelectorAll('.popover-handle'));

stateList.map(state => {
	new bootstrap.Tooltip(state, {
		placement: 'auto',  
		title: state.getAttribute("state-name")       
	})
});

popoverHandleList.map(popoverHandle => {
	console.log(popoverHandle.getAttribute("state-name"));

	new bootstrap.Popover(popoverHandle, {    
		content: popoverHandle.getAttribute("state-policy"),
		title: popoverHandle.getAttribute("state-name"),
		placement: 'auto'
	});
});