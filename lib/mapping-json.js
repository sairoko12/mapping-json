module.exports = function (map, scope){
	function mappingJson(map, scope){
		var _map = mapObject(scope);

		// This loop replace all matches with map from scope
		for(var i in _map){
			var attr = '"' + eval("scope." + _map) + '"';
			map = map.replace(_map[i], attr);
		}

		try {
			return JSON.parse(map);
		} catch (e){
			// If string format is incorrect
			console.log("Wrong format!");
			return false;
		}
	}

	return mappingJson(map, scope);
}

// Iterate any object without validation
function eachObject(object, callback){
	for(var i in object) {
		callback(i, object[i]);
	}
}

// Iterate deeply objects
function eachDeepObject(object, callback){
	for(var i in object){
		if (typeof object[i] === "object") {
			eachDeepObject(object[i], callback);
		} else {
			callback(i, object);
		}
	}
}

// Create a map string from json object
function mapObject(object){
	var map = [];

	eachObject(object, function(parent_key, parent_value){
		if (typeof parent_value === "object") {
			eachDeepObject(parent_value, function(child_key, child_value){
				map.push(parent_key + "." +  child_key);
			});
		}
	});


	return map;
}