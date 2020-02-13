// types
var str = 'Hei, TS!';
var isFetching = true;
var isLoading = false;
var myInt = 42;
var myFloat = 4.2;
var num = 4e2;
var numArr = [1, 3, 7];
var numArr2 = [1, 3, 7];
var words = ['Hei', 'TS'];
// tuple
var contact = ['Vadim', 332255];
// any
var variable = 42;
variable = 'string';
variable = [1, 3];
// void
function sayMyName(myName) {
    console.log(myName);
}
sayMyName('Vadim');
// never
function err(message) {
    throw new Error(message);
}
function infinity() {
    while (true) { }
}
var login = 'user';
var id1 = '12';
var id2 = 12;
