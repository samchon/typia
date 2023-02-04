import typia from "../../src";

interface B {
    a: string;
    b: number;
}

console.log(typia.createAssertEquals<B>().toString());
