import faster from "fast-json-stringify";

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

namespace OperatorModule
{
    export function toJSON(): number
    {
        return 2 + 3 + 4;
    }
}

class PropertyAssignment
{
    public readonly toJSON = () => 2 + 3 + 4;
}

const stringify = faster({ type: "number" });
console.log((stringify as any)(new Operator(2, 3, 4))); // null
console.log((stringify as any)(OperatorModule)); // null
console.log((stringify as any)({
    toJSON: () => 2 + 3 + 4
})); //null
console.log((stringify as any)(new PropertyAssignment())); // null