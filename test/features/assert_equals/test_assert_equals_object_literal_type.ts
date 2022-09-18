import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_literal_type = _test_assert_equals(
    "literal propertized object",
    () =>
        JSON.parse(
            JSON.stringify(ObjectLiteralType),
        ) as typeof ObjectLiteralType,
    (input) => TSON.assertEquals(input),
);
