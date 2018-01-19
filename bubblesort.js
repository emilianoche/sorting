function bubbleSort(array) {
    do{var bandera = false
        var contador = 0
        for (var i = 0; i < array.length - contador; i++) {
            if(array[i] > array[i+1]){
                swap(array,i)
                bandera = true
                contador ++
            }
        }
    }
    while (bandera)
   return array
}

var swap = function(array,i){
    var temp = array[i+1]
    array[i+1] = array[i]
    array[i] = temp
}