import TSON from "../../src";

interface Foo {
    bar: number;
    baz: (quz: number) => number;
}

console.log(TSON.is<Foo>({ bar: 2 })); // compiles
console.log(TSON.validate<Foo>({ bar: 2 })); // does not compile
console.log(TSON.assert<Foo>({ bar: 2 })); // does not compile
