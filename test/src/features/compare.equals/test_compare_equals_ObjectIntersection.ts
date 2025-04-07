import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_compare_equals_ObjectIntersection = _test_compare_equals(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((a, b) => typia.compare.equals<ObjectIntersection>(a, b));
