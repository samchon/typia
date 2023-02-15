import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectIntersection = _test_assert(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.assert(input),
    ObjectIntersection.SPOILERS,
);
