var fibnumber = +prompt('Число Фібоначчі');

function fib(fibnumber) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= fibnumber; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib(fibnumber));


