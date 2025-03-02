import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_compare_equals_ClassNonPublic = _test_compare_equals(
    "ClassNonPublic",
)<ClassNonPublic>(
    ClassNonPublic
)((a, b) => typia.compare.equals<ClassNonPublic>(a, b));
