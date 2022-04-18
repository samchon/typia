import TSON from "../../src";

export function test_stringify_to_json_namespace(): void
{
    const json: string = TSON.stringify<typeof Something>(Something);
    if (json !== "3")
        throw new Error("Bug on typescript-json.stringify(): failed to detect the toJSON() function.");
}

namespace Something
{
    export function toJSON()
    {
        return 3;
    }
}