//737 ryanair livery
newDiv = document.createElement("div");

newDiv.setAttribute("data-aircraft", 4);
newDiv.setAttribute("data-livery", 7);

newDiv.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">RyanAir';

document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv);

geofs.aircraft.Aircraft.prototype.change = function(a, b, c, d) {
    var e = this;
    a = a || this.aircraftRecord.id;
    c = this.load(a, this.getCurrentCoordinates(), c, d);
    c.then(function() {
        e.loadLivery(b)
    });
    geofs.api.analytics.event("aircraft", geofs.aircraftList[a].name);

  if (geofs.aircraft.instance.id == 4 && geofs.aircraft.instance.liveryId == 7){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"])
        return c
}
};

//Bookmark code
/*
javascript: (() => {newDiv = document.createElement("div");newDiv.setAttribute("data-aircraft", 4);newDiv.setAttribute("data-livery", 7);newDiv.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">RyanAir';document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv);geofs.aircraft.Aircraft.prototype.change = function(a, b, c, d) {var e = this;a = a || this.aircraftRecord.id;c = this.load(a, this.getCurrentCoordinates(), c, d);c.then(function() {e.loadLivery(b);});geofs.api.analytics.event("aircraft", geofs.aircraftList[a].name);if (geofs.aircraft.instance.id == 4 && geofs.aircraft.instance.liveryId == 7){geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);return c;}};})();
*/