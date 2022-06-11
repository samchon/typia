import { IPointer } from "tstl/functional/IPointer";
import TSON from "../../../src";

export function test_stringify_tuple_null(): void {
    const obj: IPointer<Tuple> = {
        value: ["hello", "world", null, 2022],
    };
    const json: string = TSON.stringify<IPointer<Tuple>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the null tuple type.",
        );
}
type Tuple = [string, string, null, number];
