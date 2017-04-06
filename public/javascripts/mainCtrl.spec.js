/**
 * Created by nutan on 4/5/2017.
 */
describe('mainCtrl', function() {
    var location;

    beforeEach(module('search'));
    var $controller;
    beforeEach(inject(function($location,_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        location = $location;
    }));


    it('should change location in search', function() {
        var $scope = {};
        controller = $controller('mainCtrl', {
            $scope: $scope,
            $location: location
        });


        jasmine.createSpyObj('location', ['path']);
        //$location.path('/new/path');

        //expect($location.path()).toBe('/new/path');
        $scope.placeName = "Newark, CA, United States";
        var myLatLng = new google.maps.LatLng({lat: 37.5296593, lng: -122.04023990000002});
       // $scope.place = {"geometry":{"location":{"lat":37.5296593,"lng":-122.04023990000002}}}

        // test whatever the service should do...
        var event = {
            preventDefault: function () {

            }
        }
        place = {
            placeName : "f",
            "geometry":{"location":{"lat": function(){
                return 37.5296593},"lng"
            :function () {
                return -122.04023990000002
            }}}

        }


        // Set some text!
       // angular.element("#searchbox").val('Some text');
        $("#searchbox").val("Newark, CA, United States");
        $scope.search(event);
       // $scope.$root.$digest();
        expect(location.path()).toMatch(/place/);


    });
});
