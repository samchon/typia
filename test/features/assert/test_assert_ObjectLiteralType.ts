import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectLiteralType = _test_assert(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.assert(input),
    ObjectLiteralType.SPOILERS,
);
