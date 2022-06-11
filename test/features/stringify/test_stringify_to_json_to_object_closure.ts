import TSON from "../../../src";

export function test_stringify_to_json_to_object_closure(): void {
    const obj = {
        value: 9,
        toJSON: () => 2 + 3 + 4,
    };
    const json: string = TSON.stringify<typeof obj>(obj);
    const expected: string = JSON.stringify(obj);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the primitive toJSON() closure function.",
        );
}
