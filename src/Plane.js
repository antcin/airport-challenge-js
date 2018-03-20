function Plane(status = 'flying') {
  this._status = status;
}

Plane.prototype.land = function(airport) {
  this._status = 'landed';
  airport.clearForLanding(this);
};
