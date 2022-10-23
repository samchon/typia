import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_literal_type = _test_is(
    "literal propertized object",
    () => ObjectLiteralType,
    TSON.createIs<typeof ObjectLiteralType>(),
    // MUST NOT SPOIL
);
