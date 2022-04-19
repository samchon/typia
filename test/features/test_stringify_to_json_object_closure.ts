import TSON from "../../src";

export function test_stringify_to_json_object_closure(): void
{
    const obj = {
        value: 9,
        toJSON: () => 2 + 3 + 4
    };
    
    const json = TSON.stringify<typeof obj>(obj);
    if (json !== "9")
        throw new Error("Bug on TSON.stringify(): failed to detect the toJSON() closure function.");
}