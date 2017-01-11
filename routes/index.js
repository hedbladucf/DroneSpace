// Include JSON file that contains movies
var locationsJSON = require('../locations.json');

// Home page route
exports.home = function(req, res) {

	var locations = locationsJSON.locations;

	res.render('home', {
		title: "Drone Flights",
		locations: locations
	});
}; 

// Single location route
exports.location_single = function(req, res) {

	var location_number = req.params.location_number;
	var locations = locationsJSON.locations;

	if(location_number >= 1 && location_number <= 6)
	{
		var place = locations[location_number - 1];
		var title = place.title;
		var address = place.address;

		res.render('location_single', {
			locations: locations,
			title: title,
			place: place,
			address: address
		});
	}
	else
	{
		res.render('notFound', {
			locations: locations,
			title: "This is not the page you are looking for..."
		});
	}
	
};

// About page route
exports.about = function(req, res) {

	var locations = locationsJSON.locations;
	var about = req.params.about;

	res.render('about', {
		locations: locations,
		title: "About the Aircraft",
		about: about
	});
};

// Page not found route
exports.notFound = function(req, res) {

	var locations = locationsJSON.locations;

	res.render('notFound', {
		locations: locations,
		title: "This is not the page you are looking for..."
	});
};