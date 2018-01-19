function mergeSort(array) {
    if(array.length === 1 ){
        return array
    }
   var mitad = Math.floor(array.length/2)
   var left = array.slice(0,mitad)
   var right = array.slice(mitad)
   return merge(mergeSort(left),mergeSort(right))
}
function merge(left, right){
    var result = []
    var indiceLeft = 0
    var indiceRight = 0
    while(indiceLeft < left.length && indiceRight < right.length){
        if (left[indiceLeft] < right[indiceRight]) {
            result.push(left[indiceLeft])
            indiceLeft++
        }
        else{
            result.push(right[indiceRight])
            indiceRight++
        }
    }
    return result.concat(left.slice([indiceLeft])).concat(right.slice([indiceRight]))
}
