var array = [420, 69, 20];
var largest= 0;
for (i=1; i<array.length; i++){
    if (array[i]>largest) {
        largest=array[i];
    }
}
console.log(largest)