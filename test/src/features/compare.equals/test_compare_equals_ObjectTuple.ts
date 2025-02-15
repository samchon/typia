import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_compare_equals_ObjectTuple = _test_compare_equals(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((a, b) => typia.compare.equals<ObjectTuple>(a, b));
