describe('Bubble Sort', function(){
    beforeEach(function () {
        spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
        
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it("prabando bubbleSort con array desordenado",function () {
        expect(bubbleSort([8,4,7,2,1,5,6])).toEqual([1,2,4,5,6,7,8]);
    })
    it("prabando bubbleSort con array ordenado",function () {
        expect(bubbleSort([1,2,4,5,6,7,8])).toEqual([1,2,4,5,6,7,8]);
    })
    it('cuantas veces se ejecuta swap', function () {
        bubbleSort([8,4,7,2,1,5,6]);
        expect(window.swap.calls.count()).toEqual(13);
    });
    it('cuantas veces se ejecuta swap en un arreglo casi ordenado', function () {
        bubbleSort([1,2,5,4,6,7,8]);
        expect(window.swap.calls.count()).toEqual(1);
    });
});