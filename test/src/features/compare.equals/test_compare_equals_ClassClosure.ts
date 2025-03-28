import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_compare_equals_ClassClosure = _test_compare_equals(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)((a, b) => typia.compare.equals<ClassClosure>(a, b));
