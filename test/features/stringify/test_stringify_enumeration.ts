import { IPointer } from "tstl/functional/IPointer";
import TSON from "../../../src";

export function test_stringify_enumeration(): void {
    test(Enumeration.Zero);
    test(Enumeration.One);
    test(Enumeration.Two);
    test(Enumeration.Three);
    test(Enumeration.Four);
}
function test(value: Enumeration): void {
    const obj: IPointer<Enumeration> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Enumeration>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant enumeration type.",
        );
}

enum Enumeration {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = "Three",
    Four = "Four",
}
