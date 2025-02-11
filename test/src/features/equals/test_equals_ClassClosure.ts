import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_equals_ClassClosure = _test_equals(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)((input) => typia.equals<ClassClosure>(input));
