import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectLiteralProperty = _test_assert(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assert(input),
    ObjectLiteralProperty.SPOILERS,
);
