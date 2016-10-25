module.exports = function (map, scope){
	function mappingJson(map, scope){
		var _map = mapObject(scope);

		for(var i in _map){
			var attr = '"' + eval("scope." + _map) + '"';
			map = map.replace(_map[i], attr);
		}

		try {
			return JSON.parse(map);
		} catch (e){
			console.log("Wrong format!");
			return false;
		}
	}

	return mappingJson(map, scope);
}


function eachObject(object, callback){
	for(var i in object) {
		callback(i, object[i]);
	}
}

function eachDeepObject(object, callback){
	for(var i in object){
		if (typeof object[i] === "object") {
			eachDeepObject(object[i], callback);
		} else {
			callback(i, object);
		}
	}
}

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