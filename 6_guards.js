// guards
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
var MyRespons = /** @class */ (function () {
    function MyRespons() {
    }
    return MyRespons;
}());
var MyErrors = /** @class */ (function () {
    function MyErrors() {
    }
    return MyErrors;
}());
function handle(res) {
    if (res instanceof MyRespons) {
        return { info: res.header + res.result };
    }
    else {
        return { info: res.header + res.message };
    }
}
