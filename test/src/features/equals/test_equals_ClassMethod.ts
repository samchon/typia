import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_equals_ClassMethod = (): void => _test_equals(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((input) => typia.equals<ClassMethod>(input));
