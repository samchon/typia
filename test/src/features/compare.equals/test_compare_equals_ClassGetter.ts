import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_compare_equals_ClassGetter = _test_compare_equals(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((a, b) => typia.compare.equals<ClassGetter>(a, b));
