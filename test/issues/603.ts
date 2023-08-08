import typia from "typia";

console.log(typia.createIs<[{ foo: [] }]>().toString());
console.log(typia.createIs<[]>().toString());
