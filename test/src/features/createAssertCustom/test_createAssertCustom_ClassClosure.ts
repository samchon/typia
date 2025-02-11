import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ClassClosure = _test_assert(CustomGuardError)(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)(typia.createAssert<ClassClosure>((p) => new CustomGuardError(p)));
