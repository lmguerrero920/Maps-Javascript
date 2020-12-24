function iniciarMap() {

    var coord = { lat: 6.21778026, lng: -75.58226824 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        draggable: true
    });



    // var searchInput = 'search_input';

    var searchInput = 'search_input'

    $(document).ready(function() {
        var autocomplete;
        autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
            types: ['geocode'],
        });

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var near_place = autocomplete.getPlace();
            document.getElementById('loc_lat').value = near_place.geometry.location.lat();
            document.getElementById('loc_long').value = near_place.geometry.location.lng();

            document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
            document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
        });
    });


    $(document).on('change', '#' + searchInput, function() {
        document.getElementById('latitude_input').value = '';
        document.getElementById('longitude_input').value = '';

        document.getElementById('latitude_view').innerHTML = '';
        document.getElementById('longitude_view').innerHTML = '';
    });



    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
        componentRestrictions: {
            country: "COL"
        }
    });

};







function obtenerDatos() {

    var valDir = document.getElementById('search_input').value;


}

$(document).ready(function() {
    $("#search_input").keyup(function() {
        var value = $(this).val();
        $("#resultado").val(value);
    });
});