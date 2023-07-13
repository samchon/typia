import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assert_ObjectLiteralProperty = _test_assert(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createAssert<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
