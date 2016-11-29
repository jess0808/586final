function initMap() {
        var centerPos1 = {lat: 35.9132, lng: -79.0558};
        var map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 6,
          center: centerPos1,
          mapTypeId: 'terrain'

        });



        // var centerPos2 = {lat: 34.8526, lng: -82.3940};
        // var map2 = new google.maps.Map(document.getElementById('map2'), {
        //   zoom: 10,
        //   center: centerPos2
        // });

        var contentString = "hi";




        var marker1 = new google.maps.Marker({
          position: centerPos1,
          map: map1
        });

        var infowindow1 = new google.maps.InfoWindow({
          content: contentString
        });

        marker1.addListener('click', function() {
          infowindow1.open(map1, marker1);
        });

        var marker2 = new google.maps.Marker({
          position: {lat: 34.8526, lng: -82.3940},
          map: map1
        });

        var marker3 = new google.maps.Marker({
          position: {lat: 35.7915, lng: -78.7811},
          map: map1
        });

        var flightPlanCoordinates = [
          {lat: 34.8526, lng: -82.3940},
          {lat: 35.7915, lng: -78.7811},
        ];

        var infowindowFlight = new google.maps.InfoWindow({
          content: "This is the flight path"
        });



        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.addListener('click', function() {
          infowindowFlight.open(map1, flightPath);
        });

        flightPath.setMap(map1);

      

      }