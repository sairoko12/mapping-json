var expect    = require("chai").expect,
mappingJson = require('../index');


describe('#main-test', function() {
	it('map string', function() {
		var map = '{"DatosGenerales": {"Nombre": data.nombre}}';
		var scope = {
			data: {
				nombre: "Alfredo"
			}
		};

		expect(mappingJson(map, scope)).to.deep.equal({"DatosGenerales": {"Nombre": "Alfredo"}});
	});
});