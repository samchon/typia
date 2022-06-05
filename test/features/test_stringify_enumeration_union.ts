import { IPointer } from "tstl/functional/IPointer";
import TSON from "../../src";

export function test_stringify_enumeration_union(): void {
    test(Something.Zero);
    test(Something.One);
    test(Something.Two);
    test(Something.Three);
    test(Something.Four);
    test(Anything.Nine);
    test(Anything.Ten);
}
function test(value: Something | Anything): void {
    const obj: IPointer<Something | Anything> = {
        value,
    };
    const json: string = TSON.stringify<IPointer<Something | Anything>>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the constant enumeration type.",
        );
}

enum Something {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = "Three",
    Four = "Four",
}
enum Anything {
    Nine = 9,
    Ten = "10",
}
