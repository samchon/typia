import TSON from "../../../src";

export function test_stringify_to_json_to_complicated_union(): void {
    new Array(5).fill(0).forEach((_, index) => test(index + 1));
}

function test(value: number): void {
    const something: Something = new Something(value);
    const json: string = TSON.stringify(something);
    const expected: string = JSON.stringify(something);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the Object.toJSON() returning complicate union.",
        );
}

class Something {
    public constructor(public readonly value: number) {}

    public toJSON(): IX | IY | number[] | string | null {
        if (this.value === 1) return { x: 1 };
        else if (this.value === 2) return { y: "2" };
        else if (this.value === 3) return [1, 2, 3];
        else if (this.value === 4) return "4";
        else return null;
    }
}

interface IX {
    x: number;
}

interface IY {
    y: string;
}
