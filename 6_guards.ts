// guards

function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyRespons {
  header: 'response header';
  result: 'response result'
}

class MyErrors {
  header: 'error header';
  message: 'error message'
}

function handle(res: MyRespons | MyErrors): object {
  if (res instanceof MyRespons) {
    return {info: res.header + res.result};
  } else {
    return {info: res.header + res.message};
  }
}
