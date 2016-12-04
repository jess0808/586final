function initMap() {
        var centerPos1 = {lat: 39.850033, lng: -87.6500523};
        var map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 4,
          center: centerPos1,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          mapTypeId: 'terrain',
          
          styles:[{"stylers":[{"hue":"#baf4c4"},{"saturation":10}]},{"featureType":"water","stylers":[{"color":"#effefd"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]}]


        });
        
       

        // var centerPos2 = {lat: 34.8526, lng: -82.3940};
        // var map2 = new google.maps.Map(document.getElementById('map2'), {
        //   zoom: 10,
        //   center: centerPos2
        // });

        var contentString = "hi";


        var marker1 = new google.maps.Marker({
          position: {lat: 36.1627, lng: -86.7816},
          map: map1
        });

        

        var infowindow1 = new google.maps.InfoWindow({
          content: contentString
        });

        marker1.addListener('click', function() {
          infowindow1.open(map1, marker1);
        });
        
        

        var marker2 = new google.maps.Marker({
          position: {lat: 40.7333, lng: -73.9908},
          map: map1
        });

        var marker3 = new google.maps.Marker({
          position: {lat: 41.8781, lng: -87.6298},
          map: map1
        });
        
        var marker4 = new google.maps.Marker({
          position: {lat: 34.0522, lng: -118.2437},
          map: map1
        });
        
        var marker5 = new google.maps.Marker({
          position: {lat: 47.6062, lng: -122.3321},
          map: map1
        });
        
        var marker6 = new google.maps.Marker({
          position: {lat: 33.7490, lng: -84.3880},
          map: map1
        });
        
        var marker7 = new google.maps.Marker({
          position: {lat: 38.2527, lng: -85.7585},
          map: map1
        });
        
        var marker8 = new google.maps.Marker({
          position: {lat: 43.6532, lng: -79.3832},
          map: map1
        });
        
    
        var flightPlanCoordinates = [
          {lat: 43.6532, lng: -79.3832},      
          {lat: 40.7333, lng: -73.9908},
          {lat: 41.8781, lng: -87.6298},
          {lat: 34.0522, lng: -118.2437},
          {lat: 47.6062, lng: -122.3321},
          {lat: 33.7490, lng: -84.3880},
          {lat: 36.1627, lng: -86.7816},
          {lat: 38.2527, lng: -85.7585},
          
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