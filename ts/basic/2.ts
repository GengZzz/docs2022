const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 200, y: 900 };
  };
};

@moveDecorator
class Move {
  public getpositon() {}
}
const test = new Move();
console.log(test.getpositon());

@moveDecorator
class User {}
