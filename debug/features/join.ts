import typia from "typia";

interface Foo {
  paths?: {
    [from: string]: [string];
  };
}

console.log(typia.createAssert<Foo>().toString());
