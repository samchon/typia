import TSON from "../../src";

export function test_stringify_to_json_to_atomic(): void
{
    const operator: Operator = new Operator(2, 3, 4);
    const json: string = TSON.stringify<Operator>(operator);
    
    if (json !== "9")
        throw new Error("Bug on TSON.stringify(): failed to understand the atomic value.");
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

    public toJSON(): number
    {
        return this.x + this.y + this.z;
    }
}