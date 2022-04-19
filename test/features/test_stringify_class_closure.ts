import TSON from "../../src";

export function test_stringify_class_closure()
{
    const something: Something = new Something("1234");
    const json: string = TSON.stringify<Something>(something);
    const expected: string = JSON.stringify(something);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the class closure type.");
}

class Something
{
    public constructor
        (
            public readonly id: string
        )
    {
    }
    public readonly type: "something" = "something";
    public readonly closure: () => string = () => `${this.type}:${this.id}`;
}