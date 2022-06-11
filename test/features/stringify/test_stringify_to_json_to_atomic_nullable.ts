import TSON from "../../../src";

export function test_stringify_to_json_to_atomic_nullable(): void {
    for (const value of [1, 2]) test(value);
}

function test(value: number): void {
    const something: Something = new Something(value);
    const json: string = TSON.stringify<Something>(something);
    const expected: string = JSON.stringify(something);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to undertand the Object.toJSON() returning nullable atomic value.",
        );
}

class Something {
    public constructor(public readonly value: number) {}

    public toJSON(): null | number {
        return this.value % 2 === 0 ? this.value : null;
    }
}
