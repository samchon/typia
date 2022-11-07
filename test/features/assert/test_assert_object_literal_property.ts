import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "./_test_assert";

export const test_assert_object_literal_property = _test_assert(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.assert(input),
    ObjectLiteralProperty.SPOILERS,
);
