import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_literal_type = _test_stringify(
    "object literal",
    () => ObjectLiteralType,
    TSON.createStringify<typeof ObjectLiteralType>(),
);
