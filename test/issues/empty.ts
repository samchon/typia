import typia from "typia";

type Union = [] | [string, number] | [string, boolean] | number[] | boolean[];

console.log(typia.createIs<Union>().toString());
