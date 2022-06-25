import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert } from "./_test_assert";

export const test_assert_object_literal_type = _test_assert(
    "literal propertized object",
    () => ObjectLiteralType,
    (input) => TSON.assertType(input),
);
