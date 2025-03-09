import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_compare_equals_ObjectSimple = _test_compare_equals(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((a, b) => typia.compare.equals<ObjectSimple>(a, b));
