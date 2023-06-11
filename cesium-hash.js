(function() {

  var encode = function(viewer) {
    var camera = viewer.camera;
    return "#" + [
      Cesium.Math.toDegrees(camera.positionCartographic.latitude).toFixed(6),
      Cesium.Math.toDegrees(camera.positionCartographic.longitude).toFixed(6),
      Math.round(camera.positionCartographic.height),
      Math.round(Cesium.Math.toDegrees(camera.heading)),
      Math.round(Cesium.Math.toDegrees(camera.pitch))
    ].join("/");
  };

  var decode = function(hash) {
    var flag = true;
    var param = [];
    hash.replace(/^#/, "").split("/").forEach(function(v) {
      var a = parseFloat(v);
      if (isNaN(a)) flag = false;
      param.push(a);
    });
    return flag && param.length === 5 ? {
      destination: Cesium.Cartesian3.fromDegrees(param[1], param[0], param[2]),
      orientation: {
        heading: Cesium.Math.toRadians(param[3]),
        pitch: Cesium.Math.toRadians(param[4]),
        roll: 0
      }
    } : null;
  };

  Cesium.Hash = function(viewer) {
    var obj = decode(location.hash);
    if (obj) viewer.camera.setView(obj);
    var lastHash = location.hash;
    viewer.camera.moveEnd.addEventListener(function() {
      location.hash = lastHash = encode(viewer);
    }, viewer);
    window.addEventListener("hashchange", function() {
      if (lastHash !== location.hash) {
        var obj = decode(location.hash);
        if (obj) viewer.camera.setView(obj);
      }
    });
  };
  Cesium.Hash.encode = encode;
  Cesium.Hash.decode = decode;

})();
