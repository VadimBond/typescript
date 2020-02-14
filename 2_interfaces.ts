// interfaces

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '12',
  size: {
    width: 30,
    height: 50
  },
  color: 'red'
};

const rect2: Rect = {
  id: '22',
  size: {
    width: 20,
    height: 40
  }
};
rect2.color = 'blue';
// rect2.id = '33';  error!
console.log(rect2);

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// extends
interface RectWithArea extends Rect {
  getArea: () => number;
  // getArea(): number;
}

const rect5: RectWithArea = {
  id: '33',
  size: {
    width: 20,
    height: 30
  },
  getArea(): number {
    return (this.size.width * this.size.height);
  }
};
console.log(rect5.getArea());

// implements
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// too much
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  color: 'red',
  marginTop: '10px'
};
