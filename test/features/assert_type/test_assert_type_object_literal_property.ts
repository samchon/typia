import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_literal_property = _test_assert_type(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.assertType(input),
    ObjectLiteralProperty.SPOILERS,
);
