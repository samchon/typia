import * as std from "../../index";

export class Point2D
  implements
    Pick<std.IComparable<Point2D>, "equals">,
    Pick<
      std.IComputable<number | Point2D, Point2D>,
      "plus" | "minus" | "multiplies"
    >
{
  public x: number;
  public y: number;

  public constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
  public equals(obj: Point2D): boolean {
    return this.x === obj.x && this.y === obj.y;
  }

  public plus(val: number | Point2D): Point2D {
    if (val instanceof Point2D)
      return new Point2D(this.x + val.x, this.y + val.y);
    else return new Point2D(this.x + val, this.y + val);
  }
  public minus(val: number | Point2D): Point2D {
    if (val instanceof Point2D)
      return new Point2D(this.x - val.x, this.y - val.y);
    else return new Point2D(this.x - val, this.y - val);
  }
  public multiplies(val: number | Point2D): Point2D {
    if (val instanceof Point2D)
      return new Point2D(this.x * val.x, this.y * val.y);
    else return new Point2D(this.x * val, this.y * val);
  }
}
