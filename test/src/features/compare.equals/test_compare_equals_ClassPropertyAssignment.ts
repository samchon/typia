import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_compare_equals_ClassPropertyAssignment = _test_compare_equals(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)((a, b) => typia.compare.equals<ClassPropertyAssignment>(a, b));
