import TSON from "../../src";

interface Foo {
    bar: number;
    baz?: string | null | number | ((quz: number) => number);
}

TSON.createIs<Foo>();
