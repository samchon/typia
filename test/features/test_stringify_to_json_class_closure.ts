import TSON from "../../src";

export function test_stringify_to_json_class(): void
{
    const operator: Operator = new Operator(2, 3, 4);
    const json: string = TSON.stringify<Operator>(operator);
    
    if (json !== "9")
        throw new Error("Bug on typescript-json.stringify(): failed to detect the toJSON() closure function.");
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

    public readonly toJSON = () => this.x + this.y + this.z;
}