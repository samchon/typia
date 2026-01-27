import { randint } from "../../algorithm/random";

export class Cube {
  // LENGTHS ON EACH DIMENSION
  public width: number;
  public height: number;
  public length: number;

  // CO-ORDINATES
  public x: number;
  public y: number;
  public z: number;

  public constructor();
  public constructor(width: number, height: number, length: number);
  public constructor(
    width: number,
    height: number,
    length: number,
    x: number,
    y: number,
    z: number,
  );

  public constructor(
    width: number = randint(0, 10),
    height: number = randint(0, 10),
    length: number = randint(0, 10),
    x: number = randint(0, 100),
    y: number = randint(0, 100),
    z: number = randint(0, 100),
  ) {
    this.width = width;
    this.height = height;
    this.length = length;

    this.x = x;
    this.y = y;
    this.z = z;
  }

  public get volume(): number {
    return this.width * this.height * this.length;
  }

  public less(obj: Cube): boolean {
    return Cube.compare_volume(this, obj);
  }
}

export namespace Cube {
  export function compare_volume(x: Cube, y: Cube): boolean {
    return x.volume < y.volume;
  }

  export function compare_position(left: Cube, right: Cube): boolean {
    if (left.x !== right.x) return left.x < right.x;
    else if (left.y !== right.y) return left.y < right.y;
    else return left.z < right.z;
  }
}
