import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_literal_property = _test_assert_equals(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.assertEquals(input),
);
