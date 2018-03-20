describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('status', function() {
    it('returns flying', function() {
      expect(plane._status).toEqual('flying');
    });
  });

  describe('land', function() {
    it('lands in a airport', function() {
      plane.land();
      expect(plane._status).toEqual('landed');
    });
  });

});
