import typia from "typia";

interface Foo {
    bar: number;
    baz?: string | null | number | ((quz: number) => number);
}

typia.createIs<Foo>();
