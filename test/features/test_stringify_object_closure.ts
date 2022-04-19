import TSON from "../../src";

export function test_stringify_object_closure(): void
{
    const record: IRecord = {
        id: "id",
        closure: () => 9
    };
    const json: string = TSON.stringify<IRecord>(record);
    const expected: string = JSON.stringify(record);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the object closure type.");
}

interface IRecord
{
    id: string;
    closure: () => number;
}