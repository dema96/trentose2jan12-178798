function getArea(dimArray) {
    if(dimArray.length == 2){
        var x = parseInt(dimArray[0]);
        var y = parseInt(dimArray[1]);
        if(!(isNaN(x) && isNaN(y))) {
            if (x >= 0 && y >= 0) {
                return x * y;
            } else {
                return -1;
            }
        }
    }else{
        return -1
    }
}

module.exports = getArea;