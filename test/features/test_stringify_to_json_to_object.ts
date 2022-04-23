import TSON from "../../src";

export function test_stringify_to_json_to_object(): void
{
    const operator: Operator = new Operator(2, 3, 4);
    const json: string = TSON.stringify<Operator>(operator);
    const expected: string = JSON.stringify(operator);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the Object.toJSON() returning object.");
}

class Operator
{
    public constructor
        (
            public readonly x: number, 
            public readonly y: number, 
            public readonly z: number
        )
    {
    }

    public toJSON()
    {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            solution: this.x + this.y + this.z
        };
    }
}