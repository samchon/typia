import { IPointer } from "tstl/functional/IPointer";
import TSON from "../../../src";

export function test_stringify_constant_string_union(): void {
    test("a");
    test("b");
    test("c");
    test("d");
}
function test(value: Literal): void {
    const obj: IPointer<Literal> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant string type.",
        );
}
type Literal = "a" | "b" | "c" | "d";
