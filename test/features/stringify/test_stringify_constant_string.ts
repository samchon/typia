import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";

export function test_stringify_constant_string(): void {
    const obj: IPointer<Literal> = {
        value: "abcdee",
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant string type.",
        );
}
type Literal = `abcdee`;
