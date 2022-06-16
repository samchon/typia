import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_stringify_object_closure(): void {
    const record: IRecord = {
        id: "id",
        closure: () => 9,
    };
    const json: string = TSON.stringify<IRecord>(record);
    if (Primitive.equal_to(JSON.parse(json), record) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the object closure type.",
        );
}

interface IRecord {
    id: string;
    closure: () => number;
}
