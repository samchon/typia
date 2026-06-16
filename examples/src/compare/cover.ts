import typia, { compare } from "typia";

const x: IPoint = typia.random<IPoint>();
const y: compare.Cover<IPoint> = { x: x.x };
const covered: boolean = typia.compare.cover<IPoint>(x, y);

console.log(covered);

interface IPoint {
  x: number;
  y: number;
  label: string;
}
