import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_literal_property = _test_assert(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    TSON.createAssert<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
