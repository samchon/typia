import typia from "typia";

interface ArrayNumberBase extends Array<number> {}

interface ArrayBoolean extends Array<boolean> {}
interface ArrayNumber extends ArrayNumberBase {}
interface ArrayString extends Array<string> {}

console.log(typia.createIs<ArrayBoolean>().toString());
console.log(typia.createIs<ArrayNumber>().toString());
console.log(typia.createIs<ArrayString>().toString());
console.log(typia.createIs<Uint8Array>().toString());
console.log(typia.createIs<Set<string>>().toString());
