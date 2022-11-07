import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_literal_type = _test_assert_type(
    "literal propertized object",
    () => ObjectLiteralType,
    (input) => TSON.assertType(input),
    // MUST NOT SPOIL
);
