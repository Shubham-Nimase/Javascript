//CountTruthy

function CountTruthy(array){
    var count=0;
    for(var value of array)
    {
        if (value){
            count++;

        }
    }
    return count;

}

const array=[null,0,undefined, 1,2,5]
count=CountTruthy(array)
console.log(count)