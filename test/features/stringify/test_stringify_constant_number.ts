import { IPointer } from "tstl/functional/IPointer";
import TSON from "../../../src";

export function test_stringify_constant_number(): void {
    const obj: IPointer<Literal> = {
        value: 3.141592,
    };
    const json: string = TSON.stringify<IPointer<Literal>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant number type.",
        );
}
type Literal = 3.141592;
