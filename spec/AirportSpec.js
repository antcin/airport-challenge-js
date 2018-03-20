describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  describe('hangar', function(){
    it('initially has an empty hangar', function(){
      expect(airport._hangar).toEqual ([]);
    });
  });

  describe('clearForLanding', function(){
    it('instructs a plane to land', function(){
      airport.clearForLanding(plane);
      expect(airport._hangar).toEqual([plane]);
    });
  });

  describe('clearForTakeOff', function(){
    it('instructs a plane to take off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport._hangar).toEqual([]);
    });
  });

  describe('isStormy', function(){
    it('can check for stormy conditions', function(){
      expect(airport.isStormy()).toBeFalsy();
    });
  });

  describe('under stormy conditions', function(){
    it('does not clear planes for take off', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
