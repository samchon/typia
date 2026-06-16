import typia from "typia";

const x: IPoint = typia.random<IPoint>();
const y: IPoint = typia.random<IPoint>();
const same: boolean = typia.compare.equals<IPoint>(x, y);

console.log(same);

interface IPoint {
  x: number;
  y: number;
  label: string;
}
