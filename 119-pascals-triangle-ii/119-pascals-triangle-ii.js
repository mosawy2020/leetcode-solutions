/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let arr = []  ; arr[0] = [1] ; arr[1] = [1,1] ; 
for (i = 2 ; i<34 ; i ++) {
arr [i] = [] ; 
   arr[i].push(1) ; 
   for (x = 1 ; x<=(arr[i-1]).length-1  ; x++) {
arr[i].push(arr[i-1][x-1]+arr[i-1][x]) ; 
   }
   arr[i].push(1) ; 

};
return arr[rowIndex];
}
