import typia from "../../../src";

interface A {
    a: string;
}
interface B {
    b: string;
}
type Union = A | B;

export const check = typia.createIs<Union>();
