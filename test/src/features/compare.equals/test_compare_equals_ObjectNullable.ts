import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_compare_equals_ObjectNullable = _test_compare_equals(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((a, b) => typia.compare.equals<ObjectNullable>(a, b));
