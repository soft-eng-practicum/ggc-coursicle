
$(function () {
	// setup the time picker
	$("#timeStart").wickedpicker({
		now: "12:00",
		timeSeperator: ":",
		minutesInterval: 15
	});
	$("#timeEnd").wickedpicker({
		now: "18:00",
		timeSeperator: ":",
		minutesInterval: 15
	});

	// update_rooms();
})

function update_rooms() {
	const searchParams = new URLSearchParams();

	// URL without query string
	const url = window.location.pathname.split('?')[0]

	$("#term, #sidebar-col input").each(function () {
		if (x = $(this).val().trim()) searchParams.append($(this).attr('id'), x);
	});

	let days = '';
	$('#days > button').each(function () {
		if ($(this).hasClass('active')) days += this.innerHTML;
	});
	if (days) searchParams.append("days", days);

	// Don't allow empty searches (term will always be present)
	if ([...searchParams].length < 2) {
		$('#rooms').html('');
		$('#rooms-header').addClass('d-none');
		history.pushState(null, '', url);
		return;
	} // else..

	let params = searchParams.toString()
	history.pushState(null, '', url + '?' + params);
	$.getJSON(`/${url.split('/')[1]}/get-rooms/?${params}`).done(
		response => {
			let responseHTML = "";
			response['availableRoomIDs'].forEach(function(el, i) {
				responseHTML += `<div class="card bg-light shadow-sm">${el}</div>`;
			});
			$('#rooms').html(responseHTML);

			let r = response['availableCount']
			$('#num-of-rooms').html(`There ${r === 1? 'is' : 'are'} ${r} available room${r === 1? '' : 's'}${r === 0? '.' : ':'}`)
		}
	);

	$('main').removeClass('sidebar-open');
}

function sidebar() {
	 $('main').toggleClass('sidebar-open');
}