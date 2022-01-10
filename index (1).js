//737 ryanair livery
newDiv = document.createElement("div");

newDiv.setAttribute("data-aircraft", 4);
newDiv.setAttribute("data-livery", 7);

newDiv.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">RyanAir';

document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv);

//737 delta livery
newDiv1 = document.createElement("div");

newDiv1.setAttribute("data-aircraft", 4);
newDiv1.setAttribute("data-livery", 8);

newDiv1.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_11.52.42_am__1_.png">Delta';

document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv1);




// master livery function
geofs.aircraft.Aircraft.prototype.change = function(a, b, c, d) {
    var e = this;
    a = a || this.aircraftRecord.id;
    c = this.load(a, this.getCurrentCoordinates(), c, d);
    c.then(function() {
        e.loadLivery(b);
    });
    geofs.api.analytics.event("aircraft", geofs.aircraftList[a].name);

  if (geofs.aircraft.instance.id == 4 && geofs.aircraft.instance.liveryId == 7){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
    if (geofs.aircraft.instance.id == 4 && geofs.aircraft.instance.liveryId == 8){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
        return c;
}
};

//Bookmark code
/*
javascript: (() => {newDiv=document.createElement("div"),newDiv.setAttribute("data-aircraft",4),newDiv.setAttribute("data-livery",7),newDiv.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">RyanAir',document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv),newDiv1=document.createElement("div"),newDiv1.setAttribute("data-aircraft",4),newDiv1.setAttribute("data-livery",8),newDiv1.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_11.52.42_am__1_.png">Delta',document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv1),geofs.aircraft.Aircraft.prototype.change=function(e,t,i,a){var r=this;return e=e||this.aircraftRecord.id,i=this.load(e,this.getCurrentCoordinates(),i,a),i.then(function(){r.loadLivery(t)}),geofs.api.analytics.event("aircraft",geofs.aircraftList[e].name),4==geofs.aircraft.instance.id&&7==geofs.aircraft.instance.liveryId&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),4==geofs.aircraft.instance.id&&8==geofs.aircraft.instance.liveryId?(geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),i):void 0};})();
*/
