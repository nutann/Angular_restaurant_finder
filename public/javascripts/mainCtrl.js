/**
 * Created by nutan on 4/4/2017.
 */

(function () {


     var app = angular.module("search");

     app.controller("mainCtrl",function ($scope,$log,$location) {


         var service = new google.maps.places.PlacesService($('#searchbox').get(0)); // note that it removes the content inside div with tag '#service-helper'
         var originInput = document.getElementById('searchbox');
         var originAutocomplete = new google.maps.places.Autocomplete(
             originInput);
         var $iSelector;
         $scope.search =  function () {
             console.log("search called in submit");
             $location.path("/place/" +place.geometry.location.lat() +"/" +place.geometry.location.lng());


         }
         originAutocomplete.addListener('place_changed', function ($scope) {



             place = originAutocomplete.getPlace();
             console.log("place change***" +JSON.stringify(place));

             $log.info("Searching for "+JSON.stringify(place.geometry));
             $log.info("Searching for "+(place.geometry.location.lat()));

             $("#search_form").submit();
             //     $iSelector = $('button.btn').find('i');
             //     console.log("select ****"+JSON.stringify($iSelector));
             //
             //     $iSelector.removeClass('glyphicon glyphicon-search')
             //     $iSelector.addClass('glyphicon glyphicon-repeat gly-spin')
             //     //<i class="glyphicon glyphicon-repeat gly-spin"></i>
             //
             //
             //     service.nearbySearch(request, callbck);
             //
             //     function callbck(results, status) {
             //         console.log("Entered" +status);
             //
             //         var cList = $('ul.horizontal-list')
             //         cList.empty();
             //         $("ul.horizontal-list").quickPagination({pageSize:"0"})
             //         if (status === google.maps.places.PlacesServiceStatus.OK) {
             //             console.log("Entered 2 " +status);
             //             console.log(results.length);
             //
             //             $.each(results, function(i,result)
             //             {
             //
             //                 var li = $('<li/>')
             //                     .addClass('ui-menu-item')
             //                     .attr('role', 'menuitem')
             //                     .appendTo(cList);
             //
             //
             //                 var photoUrl = result.photos?(result.photos[0].getUrl({maxWidth: 100, maxHeight: 100}))+"photo.jpg":"image1.jpg";
             //                 //console.log("photoUrl " +photoUrl);
             //                 /* var img = $('<img/>')
             //                  .addClass('ui-img')
             //                  .attr('src', photoUrl)
             //                  .appendTo(li);
             //                  var rating = $('<span/>')
             //                  .addClass('ui-rating')
             //                  .text(result.rating)
             //                  .appendTo(img);*/
             //
             //                 var image = $('<div/>', {
             //                     id : 'image' + i,
             //                     class :'ui-img',
             //                 }).appendTo(li);
             //                 image.css({"background-image": "url("+ photoUrl +")","background-repeat": "no-repeat","background-size":"cover"});
             //                 var rating = $('<span/>')
             //                     .addClass('ui-rating')
             //                     .text(function () {
             //                         return result.rating||"N/A"
             //                     }).appendTo(image);
             //                 rating.append('<span class="glyphicon glyphicon-star"></span>')
             //
             //
             //                 //  var imagediv = '<div class="ui-img" data-original=photoUrl style="background-image: url(photoUrl); height: 90px; display: block;"> <div class="ui-rating">{result.rating} </div> </div>'
             //                 //li.append(imagediv);
             //                 var aaa = $('<a/>')
             //                     .addClass('ui-all')
             //                     .text(result.name)
             //                     .appendTo(li);
             //                 var aaa = $('<address>')
             //                     .addClass('ui-address')
             //                     .text(result.vicinity)
             //                     .appendTo(li);
             //
             //
             //                 console.log("result == "+JSON.stringify(result));
             //             });
             //
             //             $("ul.horizontal-list").quickPagination({pageSize:"10"})
             //
             //             console.log("Done");
             //             $iSelector.removeClass('glyphicon glyphicon-repeat gly-spin');
             //             $iSelector.addClass('glyphicon glyphicon-search');
             //         }
             //     }
             // })


         });
     });
})();
