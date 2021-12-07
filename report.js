function report() {
	document.getElementById('search-input').value = "";
	document.getElementById('positive').checked = true;
	document.getElementById('negative').checked = false;

	document.getElementById('in-response').checked = true;
	document.getElementById('in-request').checked = false;
	document.getElementById('in-payload').checked = false;
	document.getElementById('in-id').checked = false;
	document.getElementById('in-code').checked = false;
	document.getElementById('in-size').checked = false;
	document.getElementById('in-lines').checked = false;
	document.getElementById('in-words').checked = false;
	document.getElementById('in-length').checked = false;

	for (let i = 0; i < document.getElementsByClassName("open_rrb").length; i++) {
		document.getElementsByClassName("open_rrb")[i].addEventListener("click", function() {
			if (document.getElementsByClassName("report-box")[i].style.display != "block") {
				document.getElementsByClassName("report-box")[i].style.display = "block";
				document.getElementsByClassName("open_rrb")[i].style.background = "red";
				document.getElementsByClassName("open_rrb")[i].value = "Close";
			}
			else {
				document.getElementsByClassName("report-box")[i].style.display = "none";
				document.getElementsByClassName("open_rrb")[i].style.background = "#009d79";
				document.getElementsByClassName("open_rrb")[i].value = "Open";
			}
		});
	}

	for (j = 1; j <= 11; j++) {
		document.getElementsByTagName('input')[j].addEventListener('click', function() {
			start_query();
		});
	}

	document.getElementById('search-input').addEventListener('keyup', function() {
		start_query();
	});
}

function start_query() {
	let search_in = '';
	for (k = 1; k < 10; k++) {
		if (document.getElementsByTagName('input')[k].checked) {
			search_in = document.getElementsByTagName('input')[k].id;
			break;
		}
	}

	if (document.getElementById('search-input').value.length > 0) {
		if (document.getElementById('negative').checked) {
			search(document.getElementById('search-input').value, search_in, 'negative');
		}
		else {
			search(document.getElementById('search-input').value, search_in, 'positive');
		}
	}
	else {
		for (l = 0; l < document.getElementsByClassName('id-data').length; l++) {
			document.getElementsByClassName('id-data')[l].style.display = "";
		}
	}
}

function search(payload, in_search, type) {
	for (j = 0; j < document.getElementsByClassName('payload').length; j++) {
		if (type == 'negative') {
			if (in_search == "in-payload") {
				if (Array.isArray(document.getElementsByClassName('payload')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-request") {
				if (Array.isArray(document.getElementsByClassName('search_request')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-id") {
				if (Array.isArray(document.getElementsByClassName('id')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-code") {
				if (Array.isArray(document.getElementsByClassName('code')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-size") {
				if (Array.isArray(document.getElementsByClassName('size')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-lines") {
				if (Array.isArray(document.getElementsByClassName('lines')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-words") {
				if (Array.isArray(document.getElementsByClassName('words')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-length") {
				if (Array.isArray(document.getElementsByClassName('length')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else {
				if (Array.isArray(document.getElementsByClassName('search_response')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
		}
		else {
			if (in_search == "in-payload") {
				if (!Array.isArray(document.getElementsByClassName('payload')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-request") {
				if (!Array.isArray(document.getElementsByClassName('search_request')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-id") {
				if (!Array.isArray(document.getElementsByClassName('id')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-code") {
				if (!Array.isArray(document.getElementsByClassName('code')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-size") {
				if (!Array.isArray(document.getElementsByClassName('size')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-lines") {
				if (!Array.isArray(document.getElementsByClassName('lines')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-words") {
				if (!Array.isArray(document.getElementsByClassName('words')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else if (in_search == "in-length") {
				if (!Array.isArray(document.getElementsByClassName('length')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
			else {
				if (!Array.isArray(document.getElementsByClassName('search_response')[j].innerHTML.match(payload))) {
					document.getElementsByClassName('id-data')[j].style.display = "none";
				}
				else {
					document.getElementsByClassName('id-data')[j].style.display = "";
				}
			}
		}
	}
}
