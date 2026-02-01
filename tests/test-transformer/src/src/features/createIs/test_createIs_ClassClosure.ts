import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createIs_ClassClosure = (): void => _test_is(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)(typia.createIs<ClassClosure>());
