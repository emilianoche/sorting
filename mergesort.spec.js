describe('Merge', function(){
    beforeEach(function () {
        spyOn(window, 'merge').and.callThrough(); // replace existing `tootsiepop['lick']` method
        
    });
    it('ordena un arreglo desordeando', function(){
        expect(mergeSort([7,2,3,5,4,8,1,6])).toEqual([1,2,3,4,5,6,7,8])
    });
    it('oirdena un arreglo ordenado', function(){
        expect(mergeSort([1,2,3,4,5,6,7,8])).toEqual([1,2,3,4,5,6,7,8])
    });
    it('Cuenta cuantas veces paso por el merge un arreglo desordenado', function(){
        mergeSort([8,4,7,2,1,5,6]);
        expect(window.merge.calls.count()).toEqual(6)
    });
    it('Cuenta cuantas veces paso por el merge un arreglo casi ordenado', function(){
        mergeSort([1,2,3,5,4,6,7,8]);
        expect(window.merge.calls.count()).toEqual(7)
    });
  });
  