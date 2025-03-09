import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_compare_equals_ObjectHttpArray = _test_compare_equals(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((a, b) => typia.compare.equals<ObjectHttpArray>(a, b));
