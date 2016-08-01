var app = angular.module("madLibsApp");
    app.factory('madLibsFactory', function() {
      var emptyObject = {
      };
      function saveObject(madLib){
        emptyObject = madLib;
        console.log(emptyObject);
      };

      function returnObject(){
        return emptyObject;
      };
    return {saveObject:saveObject, returnObject:returnObject}

});
