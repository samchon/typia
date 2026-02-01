import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

import { TypeGuardError } from "typia";

export const test_createAssert_ClassClosure = (): void => _test_assert(TypeGuardError)(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)(typia.createAssert<ClassClosure>());
