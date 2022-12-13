import typia from "../../src";

interface Foo {
    bar: number;
    baz?: string | null | number | ((quz: number) => number);
}

typia.createIs<Foo>();
