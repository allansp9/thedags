$(document).ready( function() {
    
       // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 500,
            offset: -50,
            easing: 'ease-in-out'
        });
    });   
    
    
    /*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        keyboardControl: true,
        grabCursor: true,
        slidesPerView: '5',
        breakpoints: {
                2400: {
                  slidesPerView: 5,  
                },
                2200: {
                  slidesPerView: 4,  
                },
                1980: {
                  slidesPerView: 3,  
                },
                1200: {
                    slidesPerView: 2,
                },
                850: {
                    slidesPerView: 1,
                }
            }

    });
       
                     // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 16,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(-23.96760, -46.31404),
                    zoomControl: false,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.LEFT_CENTER
                    },
                    scaleControl: false,
                    mapTypeControl:false,
                    streetViewControl: false,
                    panControl:false,
                    rotateControl:false,
                    draggable:false,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    },

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#e3b141"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#e0a64b"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#0e0d0a"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#d1b995"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#12120f"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"-77"},{"gamma":"4.48"},{"saturation":"24"},{"weight":"0.65"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#f6b044"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#4f4e49"},{"weight":"0.36"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#c4ac87"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#262307"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#a4875a"},{"lightness":16},{"weight":"0.16"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#deb483"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0f252e"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#080808"},{"gamma":"3.14"},{"weight":"1.07"}]}]
                };
                
                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('googleMap');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-23.96760, -46.31404),
                    animation:google.maps.Animation.BOUNCE,
                    map: map,
                    icon:'../img/star-3.png'
                });
                google.maps.event.addDomListener(window, "resize", function() {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);
		        });
            };
    
});