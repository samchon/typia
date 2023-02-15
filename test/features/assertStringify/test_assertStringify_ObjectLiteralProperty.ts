import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectLiteralProperty = _test_assertStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertStringify(input),
    ObjectLiteralProperty.SPOILERS,
);
