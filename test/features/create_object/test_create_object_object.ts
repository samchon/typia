import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_create_object_object(): void {
    const obj = TSON.createObject({
        id: 1,
        account: "samchon",
        name: "Jeongho Nam",
    });
    const expected = {
        id: 1,
        account: "samchon",
        name: "Jeongho Nam",
    };

    if (Primitive.equal_to(obj, expected) === false)
        throw new Error("Bug on TSON.create(): failed to create exact object.");
}
