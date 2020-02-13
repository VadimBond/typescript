// types

const str: string = 'Hei, TS!';

const isFetching: boolean = true;
const isLoading: boolean = false;

const myInt: number = 42;
const myFloat: number = 4.2;
let num: number = 4e2;

const numArr: number[] = [1, 3, 7];
const numArr2: Array<number> = [1, 3, 7];
const words: string[] = ['Hei', 'TS'];

// tuple
const contact: [string, number] = ['Vadim', 332255];

// any
let variable: any = 42;
variable = 'string';
variable = [1, 3];

// void
function sayMyName(myName: string): void {
  console.log(myName);
}
sayMyName('Vadim');

// never
function err(message: string): never {
  throw new Error(message);
}

function infinity(): never {
  while (true) {}
}

// type
type Login = string;
const login: Login = 'user';

type ID = string | number;
const id1: ID = '12';
const id2: ID = 12;

type SomeType = string | null | undefined;
