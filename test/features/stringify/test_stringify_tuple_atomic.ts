import { IPointer } from "../../../src/structures/IPointer";
import TSON from "../../../src";

export function test_stringify_tuple_atomic(): void {
    const obj: IPointer<Tuple> = {
        value: ["hello", "world", 2022],
    };
    const json: string = TSON.stringify<IPointer<Tuple>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the atomic tuple type.",
        );
}
type Tuple = [string, string, number];
