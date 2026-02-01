import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createEquals_ClassClosure = (): void => _test_equals(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)(typia.createEquals<ClassClosure>());
