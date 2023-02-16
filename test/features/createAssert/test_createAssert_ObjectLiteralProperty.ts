import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectLiteralProperty = _test_assert(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createAssert<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
