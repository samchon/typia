import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_compare_equals_ObjectUndefined = _test_compare_equals(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((a, b) => typia.compare.equals<ObjectUndefined>(a, b));
