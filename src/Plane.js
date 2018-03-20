function Plane(status = 'flying') {
  this._status = status;
}

Plane.prototype.land = function () {
  this._status = 'landed';
};
