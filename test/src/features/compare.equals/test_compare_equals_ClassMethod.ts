import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_compare_equals_ClassMethod = _test_compare_equals(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((a, b) => typia.compare.equals<ClassMethod>(a, b));
