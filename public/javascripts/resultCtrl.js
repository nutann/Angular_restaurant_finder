/**
 * Created by nutan on 4/4/2017.
 */

(function () {

    var app = angular.module("search");

    app.controller("resultCtrl",function ($scope,$log,$routeParams) {

            $scope.placeName = $routeParams.placename||"";
        $("#searchbox").value = $routeParams.placename;
        $("#searchbox").val($routeParams.placename);
        $scope.getUrl = function (photos) {
            console.log("photos called" );
            var photoUrl = photos?(photos[0].getUrl({maxWidth: 100, maxHeight: 100}))+"photo.jpg":"image1.jpg";
            console.log("photos called" +photoUrl);
            return photoUrl;


        }

        $log.info("result page ### "+$("#searchbox").val());
        $scope.results = [{name:"Nutan",rating : 4}];
        var service = new google.maps.places.PlacesService(document.createElement('div'));
        var latitude = parseFloat($routeParams.lat);
        myLatLng = new google.maps.LatLng({lat: latitude, lng: parseFloat($routeParams.lng)});
        var locationad = {
            lat : $routeParams.lat,
            lng : $routeParams.lng
        }

        var request = {
                        location: myLatLng,
                        radius: '500',
                        types: ['restaurant']
                    };



    service.nearbySearch(request, callbck);

            function callbck(results, status) {
                console.log("Entered" +status);

                var cList = $('ul.horizontal-list')
               // cList.empty();
                $("ul.horizontal-list").quickPagination({pageSize:"10"})
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log("Entered 2 " +status);
                    console.log(JSON.stringify(results));
                    $scope.results = results;
                    $scope.$apply();
                   // $scope.loadData();
    //
    //                 $.each(results, function(i,result)
    //                 {
    //
    //                         var li = $('<li/>')
    //                             .addClass('ui-menu-item')
    //                             .attr('role', 'menuitem')
    //                             .appendTo(cList);
    //
    //
    //                         var photoUrl = result.photos?(result.photos[0].getUrl({maxWidth: 100, maxHeight: 100}))+"photo.jpg":"image1.jpg";
    //                         //console.log("photoUrl " +photoUrl);
    //                         /* var img = $('<img/>')
    //                          .addClass('ui-img')
    //                          .attr('src', photoUrl)
    //                          .appendTo(li);
    //                          var rating = $('<span/>')
    //                          .addClass('ui-rating')
    //                          .text(result.rating)
    //                          .appendTo(img);*/
    //
    //                         var image = $('<div/>', {
    //                             id : 'image' + i,
    //                             class :'ui-img',
    //                         }).appendTo(li);
    //                         image.css({"background-image": "url("+ photoUrl +")","background-repeat": "no-repeat","background-size":"cover"});
    //                         var rating = $('<span/>')
    //                             .addClass('ui-rating')
    //                             .text(function () {
    //                               return result.rating||"N/A"
    //                             }).appendTo(image);
    //                     rating.append('<span class="glyphicon glyphicon-star"></span>')
    //
    //
    //                         //  var imagediv = '<div class="ui-img" data-original=photoUrl style="background-image: url(photoUrl); height: 90px; display: block;"> <div class="ui-rating">{result.rating} </div> </div>'
    //                         //li.append(imagediv);
    //                         var aaa = $('<a/>')
    //                             .addClass('ui-all')
    //                             .text(result.name)
    //                             .appendTo(li);
    //                     var aaa = $('<address>')
    //                         .addClass('ui-address')
    //                         .text(result.vicinity)
    //                         .appendTo(li);
    //
    //
    //                     console.log("result == "+JSON.stringify(result));
    //                 });
    //
                     $("ul.horizontal-list").quickPagination({pageSize:"10"})
    //
    //                 console.log("Done");
    //                 $iSelector.removeClass('glyphicon glyphicon-repeat gly-spin');
    //                 $iSelector.addClass('glyphicon glyphicon-search');
    //             }
           }
        };
    });

})();
