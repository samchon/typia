import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_nullable = _test_stringify(
    "nullable object",
    ObjectNullable.generate(),
    TSON.createStringify<ObjectNullable>(),
);
