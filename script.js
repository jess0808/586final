function initMap() {
        var centerPos1 = {lat: 39.50, lng: -98.35};
        var map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 4,
          center: centerPos1,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          mapTypeId: 'terrain',
          
          //from snazzymaps
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}]
        });
        

       var iconBase = {
        url: "images/mapmarker.png",
        scaledSize: new google.maps.Size(30, 26), // scaled size
       };
       
       var iconStart = {
        url: "images/mapstart.png",
        scaledSize: new google.maps.Size(30, 26), // scaled size
       };
       
        //marker 1: Toronto
        var marker1 = new google.maps.Marker({
          position: {lat: 43.6532, lng: -79.3832},
          map: map1,
          icon: iconStart,
     
        });

        
        var contentString1 = '<div class="map-popup">' +
           '<div class="popup-place">Woofstock</div>' +
           '<div class="popup-city">Toronto</div>' +
           '<div class="popup-date">May 28, 2016</div>' +
           '</div>';
        
        var infowindow1 = new google.maps.InfoWindow({
           content: contentString1,
           
        });
      
        marker1.addListener('click', function() {
           infowindow1.open(map1, marker1);
        });
        
                
        //marker 2: NY
        var marker2 = new google.maps.Marker({
          position: {lat: 40.7333, lng: -73.9908},
          map: map1,
          icon: iconBase,
        });
        
        var contentString2 = '<div class="map-popup">' +
           '<div class="popup-place">The Strand</div>' +
           '<div class="popup-city">New York, NY</div>' +
           '<div class="popup-date">Nov. 1, 2016</div>' +
           '</div>';
        
        var infowindow2 = new google.maps.InfoWindow({
           content: contentString2,
           
        });
      
        marker2.addListener('click', function() {
           infowindow2.open(map1, marker2);
        });
        
        //marker 3: Chicago
        var marker3 = new google.maps.Marker({
          position: {lat: 41.8781, lng: -87.6298},
          map: map1,
          icon: iconBase,
        });
        
        var contentString3 = '<div class="map-popup">' +
           '<div class="popup-place">Anderson Books</div>' +
           '<div class="popup-city">Chicago, IL</div>' +
           '<div class="popup-date">Nov. 2, 2016</div>' +
           '</div>';
        
        var infowindow3 = new google.maps.InfoWindow({
           content: contentString3,
           
        });
      
        marker3.addListener('click', function() {
           infowindow3.open(map1, marker3);
        });
        
        //marker 4: LA
        var marker4 = new google.maps.Marker({
          position: {lat: 34.0522, lng: -118.2437},
          map: map1,
          icon: iconBase,
        });
        
        var contentString4 = '<div class="map-popup">' +
           '<div class="popup-place">The Last Book Store</div>' +
           '<div class="popup-city">Los Angeles, CA</div>' +
           '<div class="popup-date">Nov. 3, 2016</div>' +
           '</div>';
        
        var infowindow4 = new google.maps.InfoWindow({
           content: contentString4,
           
        });
      
        marker4.addListener('click', function() {
           infowindow4.open(map1, marker4);
        });
        
        //marker 5: Seattle
        var marker5 = new google.maps.Marker({
          position: {lat: 47.6062, lng: -122.3321},
          map: map1,
          icon: iconBase,
        });
        
        var contentString5 = '<div class="map-popup">' +
           '<div class="popup-place">3rd Place Books</div>' +
           '<div class="popup-city">Seattle, WA</div>' +
           '<div class="popup-date">Nov. 4, 2016</div>' +
           '</div>';
        
        var infowindow5 = new google.maps.InfoWindow({
           content: contentString5,
           
        });
        
        marker5.addListener('click', function() {
           infowindow5.open(map1, marker5);
        });
        
        //marker 6: Atlanta
        var marker6 = new google.maps.Marker({
          position: {lat: 33.7490, lng: -84.3880},
          map: map1,
          icon: iconBase,
        });
        
        var contentString6 = '<div class="map-popup">' +
           '<div class="popup-place">Barnes & Noble</div>' +
           '<div class="popup-city">Atlanta, GA</div>' +
           '<div class="popup-date">Nov. 9, 2016</div>' +
           '</div>';
        
        var infowindow6 = new google.maps.InfoWindow({
           content: contentString6,
           
        });
        
        marker6.addListener('click', function() {
           infowindow6.open(map1, marker6);
        });
        
        //marker 7: Nashville
        var marker7 = new google.maps.Marker({
          position: {lat: 36.1627, lng: -86.7816},
          map: map1,
          icon: iconBase,
        });
        
        var contentString7 = '<div class="map-popup">' +
           '<div class="popup-place">Parnassus Books</div>' +
           '<div class="popup-city">Nashville, TN</div>' +
           '<div class="popup-date">Nov. 12, 2016</div>' +
           '</div>';
        
        var infowindow7 = new google.maps.InfoWindow({
           content: contentString7,
           
        });
        
        marker7.addListener('click', function() {
           infowindow7.open(map1, marker7);
        });
        
        //marker 8: Louisville
        var marker8 = new google.maps.Marker({
          position: {lat: 38.2527, lng: -85.7585},
          map: map1,
          icon: iconBase,
        });
        
        var contentString8 = '<div class="map-popup">' +
           '<div class="popup-place">Books A Million</div>' +
           '<div class="popup-city">Louisville, KY</div>' +
           '<div class="popup-date">Nov. 19, 2016</div>' +
           '</div>';
        
        var infowindow8 = new google.maps.InfoWindow({
           content: contentString8,
           
        });
        
        marker8.addListener('click', function() {
           infowindow8.open(map1, marker8);
        });
        
        
        //flightplan
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




        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#726658',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });



        flightPath.setMap(map1);

      }
      


