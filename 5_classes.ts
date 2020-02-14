// classes

class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string): string {
    return `[${name}]: TS version is ${this.version}`
  }
}

// class Car {
//   readonly model: string;
//   readonly numOfWheels: number = 4;
//
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numOfWheels: number = 4;

  constructor(readonly model: string) {}  // !
}

// public, protected, private
class Animal {
  protected voice: string = '';
  public color: string = 'black';
  private go(): void {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice =voice;
  }
  public getVoice(): string {
    return this.voice;
  }
}

const cat = new Cat();
cat.setVoice('May!');
console.log(cat.getVoice());
console.log(cat.color);
// cat.voice;  error!

// abstract
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }
  info(): string {
    return 'This is info';
  }
}
