import TSON from "../../src";

export function test_stringify_class_public(): void
{
    const accessor: Accessor = new Accessor("public", "public", "protected", "private");
    const json: string = TSON.stringify<Accessor>(accessor);
    const expected: string = JSON.stringify({ implicit: "public", shown: "public" });

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the private class member.");
}

class Accessor
{
    public constructor
        (
            readonly implicit: string,
            public readonly shown: string,
            protected readonly heritage: string,
            private readonly hidden: string
        )
    {
    }
    public static readonly CONSTANT: string = "some constant value";

    public getHiden(): string
    {
        return this.hidden;
    }
}