function Plane(status = 'flying') {
  this._status = status;
}

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this._status = 'landed';
};

Plane.prototype.takeoff = function(airport) {
  airport.clearForTakeOff(this);
  this._status = 'flying'
}
