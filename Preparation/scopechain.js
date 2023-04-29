var y = 24;
function favFunction() {
    let x = 667;
    var anotherFavFunction = function () {
        console.log(y);
        // Does not find x inside anotherFavFunction so looks for variable
    }
    var yetAnotherFavFunction = function () {
        console.log(x);
        // Does not find y inside yetAnotherFavFunction, so looks for varia
    }
    anotherFavFunction();
    yetAnotherFavFunction();
}
favFunction();