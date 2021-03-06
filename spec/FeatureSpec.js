describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport)
    expect(airport._hangar).toContain(plane);
  });

  it('planes can be instructed to takeoff', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport._hangar).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function(){
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(airport);}).toThrowError('cannot takeoff during storm');
    expect(airport._hangar).toContain(plane);
  });

});
