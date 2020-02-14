// operators

interface Person {
  name: string;
  age: number
}

type PersonKeys = keyof Person; // 'name' | 'age'
let key: PersonKeys = 'name';
key = 'age';
// key = 'job'; error!

interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: Date
}

type UserKeys1 = Exclude<keyof User, '_id' | 'createdAt'>;  // 'name', 'email'
let u1: UserKeys1 = 'name';
u1 = 'email';
// u1 = 'job';

type UserKeys2 = Pick<User, 'name' | 'email'>;  // {name, email}
let u2: UserKeys2 = {name: 'Vadim', email: 'w@com'};
u2 = {name: 'VVV', email: 'ww@com'};
