## Mapping Json
 
---

### How to use

+ Install with NPM

	```
		npm install mapping-json
	```
	+ With dev dependencies use flag `--dev`
	
	
+ Require package
	
	```
		var mappingJson = require("mapping-json");
	```
	
+ Run example
	
	```
		var map = '{"DatosGenerales": {"Nombre": data.nombre}}';
		var scope = {data: {nombre: "Pedro Lopez"}};
		console.log(mappingJson(map,scope));
	```
	
+ Run a test with a nyan cat

	```
		npm test
	```