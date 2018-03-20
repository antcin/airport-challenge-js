describe('Plane', function() {
  var plane;
  var airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });


  describe('status', function() {
    it('returns flying if plane is flying', function() {
      expect(plane._status).toEqual('flying');
    });

      it('returns landed if plane has landed', function() {
        plane.land(airport);
        expect(plane._status).toEqual('landed');
      });
  });

  describe('landing', function(){
    it('can land at an airport', function(){
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

});
