import typia from "typia";

interface Foo {
  bar: number;
  baz: (quz: number) => number;
}

console.log(typia.is<Foo>({ bar: 2 })); // compiles
console.log(typia.validate<Foo>({ bar: 2 })); // does not compile
console.log(typia.assert<Foo>({ bar: 2 })); // does not compile
