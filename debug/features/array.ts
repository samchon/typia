import typia from "typia";

interface ArrayNumberBase extends Array<number> {}

interface ArrayBoolean extends Array<boolean> {}
interface ArrayNumber extends ArrayNumberBase {}
interface ArrayString extends Array<string> {}

console.log(
  typia.createIs<ArrayBoolean>().toString(),
  typia.createIs<boolean[]>().toString(),
);
console.log(
  typia.createIs<ArrayNumber>().toString(),
  typia.createIs<number[]>().toString(),
);
console.log(
  typia.createIs<ArrayString>().toString(),
  typia.createIs<string[]>().toString(),
);
console.log(typia.createIs<Uint8Array>().toString());
console.log(typia.createIs<Set<string>>().toString());
