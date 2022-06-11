import TSON from "../../../src";

export function test_stringify_to_json_to_array(): void {
    const something: Something = new Something(10);
    const json: string = TSON.stringify<Something>(something);
    const expected: string = JSON.stringify(something);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to undertand the Object.toJSON() returning array.",
        );
}

class Something {
    public constructor(public readonly value: number) {}

    public toJSON(): number[] {
        return new Array(this.value).fill(0).map((_, index) => index + 1);
    }
}
