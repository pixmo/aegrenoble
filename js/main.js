(function() {

	var organizersArray = [
		{ name: 'Quentin Supernant', twitter:'@QuentinSup' },
		{ name: 'Mathieu Genty', twitter:'@misterniark' },
		{ name: 'Allan Francani', twitter:'@AFrancani' },
		{ name: 'Julien Lebeau', twitter:'@_Jlebeau_' }
	];

	var nextDate = ko.observable('2 mai 2013');

	var _organizers = ko.observableArray(organizersArray);
	var view = {
		organizers: _organizers,
		nextDate : nextDate
	};

	ko.applyBindings(view);

})();