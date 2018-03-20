describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  describe('hangar', function(){
    it('has an empty hangar', function(){
      expect(airport._hangar).toEqual ([]);
    });
  });

  describe('clearForLanding', function(){
    it('instructs a plane to land', function(){
      airport.clearForLanding(plane);
      expect(airport._hangar).toEqual([plane]);
    });
  });



});
