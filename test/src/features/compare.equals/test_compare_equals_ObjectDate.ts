import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_compare_equals_ObjectDate = _test_compare_equals(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)((a, b) => typia.compare.equals<ObjectDate>(a, b));
