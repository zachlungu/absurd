module.exports = function(api) {
	api.add({
		body: {
			pad: '50px',
			font: '14px "Lucida Grande", Helvetica, Arial, sans-serif'
		},
		a: {
			color: '#00B7FF'
		}
	});
	api.import(__dirname + '/another.js');
};