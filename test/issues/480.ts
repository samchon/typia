import typia from "typia";

interface B {
  a: string;
  b: number;
}

console.log(typia.createAssertEquals<B>().toString());
