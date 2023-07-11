import typia from "typia";

type Intersection = typia.Primitive<number & { __x: string }>;
console.log(typia.createIs<Intersection>().toString());
