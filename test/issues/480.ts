import typia from "../../src";

interface A {
    a: string;
}

interface B {
    a: A;
    b: number;
}

console.log(
    typia.createEquals<B>().toString(),
    typia.equals<B>({ a: "A" }),
    typia.equals<B>({ a: "A", c: 1 }),
);
