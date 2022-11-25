import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectLiteralProperty = _test_assert(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createAssert<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);