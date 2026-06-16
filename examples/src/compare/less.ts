import typia from "typia";

const items: IPoint[] = typia.random<IPoint[]>();
items.sort((a, b) =>
  typia.compare.less<IPoint>(a, b)
    ? -1
    : typia.compare.less<IPoint>(b, a)
      ? 1
      : 0,
);

console.log(items);

interface IPoint {
  x: number;
  y: number;
  label: string;
}
