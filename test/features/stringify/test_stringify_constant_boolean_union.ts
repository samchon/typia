import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";

export function test_stringify_constant_boolean_boolean(): void {
    test(true);
    test(false);
}
function test(value: true | false): void {
    const obj: IPointer<Literal> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant boolean type.",
        );
}
type Literal = true | false;
