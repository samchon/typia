import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_literal_type = _test_assert(
    "literal propertized object",
    () => ObjectLiteralType,
    TSON.createAssertType<typeof ObjectLiteralType>(),
    // MUST NOT SPOIL
);
