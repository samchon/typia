import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";

export function test_stringify_constant_boolean(): void {
    const obj: IPointer<Literal> = {
        value: false,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant boolean type.",
        );
}
type Literal = false;
