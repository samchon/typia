import typia from "typia";

type Intersection = { x: number } & Record<string, string>;

console.log(typia.createClone<Intersection>().toString());
