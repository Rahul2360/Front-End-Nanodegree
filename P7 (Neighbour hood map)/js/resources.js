var places = [
  {
  name: "Elante Mall",
  loc:
  {lat: 30.705360,
  lng: 76.801104},
  id: "5114cd90e4b06bb0ed15a97f",
  selected: false,
  show: true
},
{
  name: "Sukhna Lake",
  loc:
  {lat: 30.742138,
  lng: 76.818756},
  id: "4c456c4b8c1f20a14ebd3d99",
  selected:false,
  show: true
},
{
  name: "JW Mariot Hotel",
  loc:
  {lat: 30.733315,
  lng: 76.779418},
  id: "4dff0926d4c00c69c14b292a",
  selected: false,
  show:true
},
{
  name: "Cricket Stadium",
  loc:
  {lat: 30.708875,
  lng: 76.723404},
  id: "4d6318a32f16b60c8ebcdcf4",
  selected: false,
  show:true
},
{
  name: "Rock Garden",
  loc:
  {lat: 30.752535,
  lng: 76.810104},
  id: "4b6fe660f964a5206dff2ce3",
  selected: false,
  show:true
}
];

/*function initMap() {
var uluru = {lat: 30.733315, lng: 76.779418};
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  ko.applyBindings(new displayplaces());
  markerInfo = new google.maps.InfoWindow();
}
function googleError(){
  document.getElementById('error').innerHTML= "Map is not working"
}*/
// for dsplay the map
var map;
var uluru = {lat: 30.733315, lng: 76.779418};
function initMap() {
    var mapOptions = {
        center:uluru,
        zoom:13
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    markerInfo = new google.maps.InfoWindow();
    ko.applyBindings(new displayplaces());
}
function googleError() {
    document.getElementById('map').innerHTML = "Map is not working";
}
//places.forEach(function(place) {
  //var marker = new google.maps.Marker({
  //  position: new google.maps.LatLng(place.lat, place.lng),
  //  ma  p: map,
  //});
//});

function displayplaces(){
    var self = this;
    self.errormessage = ko.observable();
    self.searchText = ko.observable();
    self.array=[];

    for(var i=0;i<places.length;i++)
    {
      var mark = new google.maps.Marker({
        position :  places[i].loc,
        map:map,
        name:places[i].name,
        show:ko.observable(places[i].show),
        selected:ko.observable(places[i].selected),
        animation:google.maps.Animation.DROP,
        ids:places[i].id
      });
      self.array.push(mark);
      self.array[self.array.length - 1].setVisible(self.array[self.array.length - 1].show());
    }

    self.arrayinfo=function(mark){
      $.ajax({
        url: "https://api.foursquare.com/v2/venues/" + mark.ids + "?client_id=IJCOB5ATI4LYJMU5QGFLLJ5RILJJWX45WEL0FRKHLBZUBHZI&client_secret=3M3GULPVK30BTHC12FZVEHHVDEKDQLAYJE5KJKAYY3GOE5UX&v=20161112",
        dataType:"json",
            success: function(data) {
                result=data.response.venue;
                if (result.hasOwnProperty('likes')) {
                    mark.likes=result.likes.summary;
                }
              //  else {
                //  mark.likes="Error";
                //}
                if (result.hasOwnProperty('rating')){
                  mark.rating=result.rating.summary;
                }
                //else{
                  //mark.rating="error";
                //}
            },
            error: function(e) {
                self.errormessage("No likes and no rating");
            }
      });
    };

    for(var j=0;j<self.array.length;j++)
    {
      (function(mark){
        self.arrayinfo(mark);
        mark.addListener('click',function() {
          self.setSelected(mark);
        });
      })(self.array[j]);
    }

      self.search=function(){
      markerInfo.close();
      var text=self.searchText();
      if (text.length === 0){
        self.showall(true);
      }
      else
      {
        for (var i = 0; i < self.array.length; i++) {
                if (self.array[i].name.toLowerCase().indexOf(text.toLowerCase()) > -1) {
                    self.array[i].setVisible(true);
                    self.array[i].show(true);
                } else {
                    self.array[i].setVisible(false);
                    self.array[i].show(false);
                }
            }
        }
        markerInfo.close();
      };
    self.showall=function(show){
      for(var j=0;j<self.array.length;j++)
      {
        self.array[j].show(show);
        self.array[j].setVisible(show);
      }
    };
    self.unselectall=function()
    {
      for(var k=0;k<self.array.length;k++)
      {
          self.array[k].selected(false);
      }
    };

    self.setSelected =function(mark){
      console.log(location);
      self.unselectall();
      mark.selected(true);
      self.marker=mark;
      formatlikes=function(){
        if(self.marker.likes !== ""){
          return self.marker.likes;
        }
        else{
          return "no likes";
        }
      };
      formatrating=function(){
        if(self.marker.rating === "" || self.marker.rating === undefined)
        {
          return "No rating";
        }
        else {
          return self.marker.rating;
        }
      };
      markerInfo.setContent("<h4>" + self.marker.name + "</h4>" + "<div>"+ formatlikes() + "</div>" + "<div>" + formatrating()+ "</div>");
      //markerInfo.setContent("<div>" + formatrating() + "</div>" );
      markerInfo.open(map,mark);

      self.animateMarker=function(mark){
          mark.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){
            mark.setAnimation(null);
          }, 500);
      };

      self.animateMarker(mark);
};}


    //self.locations = ko.observableArray();
    //places.forEach(function(place){
    //  self.locations.push(place);
    //});
