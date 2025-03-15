import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_compare_equals_ObjectHttpNullable = _test_compare_equals(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)((a, b) => typia.compare.equals<ObjectHttpNullable>(a, b));
