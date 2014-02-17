$(document).ready(function() {

	var getEventDate = function(now) {
		var day = now.getDay();
		var date = now.getDate();
		var newDate = new Date(now.getTime());
		newDate.setDate(1);

		var firstDayOfMonth = newDate.getDay();
		var eventDate = new Date(now.getTime());
		
		if(firstDayOfMonth > 4) {
			eventDate.setDate((7 - firstDayOfMonth) + 5);
		} else {
			eventDate.setDate(5 - firstDayOfMonth);
		}
		
		return eventDate;
	};

	var getNextEventDate = function(d) {
		var now = d || new Date();
		var eventDate = getEventDate(now);
		if(now.getDate() > eventDate.getDate()) {
			now.setMonth(now.getMonth() + 1);
			now.setDate(1);
			eventDate = getEventDate(now);
		}

		eventDate.setHours(19);
		eventDate.setMinutes(00);

		return eventDate;
	};

	var getNextEventDateString = function() {
		var date = getNextEventDate();
		var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
		return 'Jeudi ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' 19h00'; 
	};

	var organizersArray = [
		{ name: 'Quentin Supernant', twitter:'@QuentinSup' },
		{ name: 'Mathieu Genty', twitter:'@misterniark' },
		{ name: 'Allan Francani', twitter:'@AFrancani' },
		{ name: 'Julien Lebeau', twitter:'@_Jlebeau_' }
	];

	var _nextDate = ko.observable(getNextEventDateString());

	var _organizers = ko.observableArray(organizersArray);
	var view = {
		organizers: _organizers,
		nextDate : _nextDate
	};

	/*
	for(var i = 0; i < 11; i++) {
		var d = new Date();
		d.setDate(1);
		d.setMonth(i);
		console.log(getNextEventDate(d));
	}
	*/

	ko.applyBindings(view);

});