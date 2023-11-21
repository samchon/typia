import typia from "typia";

type A = {
  createdAt: Date;
  value: number;
};
type B = {
  createdAt: Date;
  value: string;
};
type AB = A | B;

console.log(typia.createIs<AB>().toString());
