/**
 * Created by nutan on 4/4/2017.
 */

(function () {


     var app = angular.module("search");

    var mainCtrl = function ($scope,$log,$location) {

         var service = new google.maps.places.PlacesService($('#searchbox').get(0)); // note that it removes the content inside div with tag '#service-helper'
         var originInput = document.getElementById('searchbox');
         var originAutocomplete = new google.maps.places.Autocomplete(
             originInput);
         var $iSelector;
        $("#searchbox").val("");


         $scope.search =  function (event) {
             event.preventDefault();
             $scope.placeName = $("#searchbox").val();
             console.log("search called in submit"+$("#searchbox").val());
             $location.path("/place/" +$scope.placeName + "/" +place.geometry.location.lat() +"/" +place.geometry.location.lng());


         }
         originAutocomplete.addListener('place_changed', function () {
             place = originAutocomplete.getPlace();
             console.log("place change***" +JSON.stringify(place));
             $("#search_form").submit();

         });
     };
     app.controller('mainCtrl',mainCtrl);
})();
