import typia from "typia";

export const test_pr_952_union_of_toJSON = () => {
  const x: X = { _: new Date(), x: new Date() };
  const y: Y = { _: new Date(), y: new Date() };

  typia.json.stringify<X | Y>(x);
  typia.json.stringify<X | Y>(y);
};
interface X {
  _: Date;
  x: Date;
}
interface Y {
  _: Date;
  y: Date;
}
