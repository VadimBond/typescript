// interfaces
var rect1 = {
    id: '12',
    size: {
        width: 30,
        height: 50
    },
    color: 'red'
};
var rect2 = {
    id: '22',
    size: {
        width: 20,
        height: 40
    }
};
rect2.color = 'blue';
// rect2.id = '33';  error!
console.log(rect2);
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '33',
    size: {
        width: 20,
        height: 30
    },
    getArea: function () {
        return (this.size.width * this.size.height);
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    color: 'red',
    marginTop: '10px'
};
