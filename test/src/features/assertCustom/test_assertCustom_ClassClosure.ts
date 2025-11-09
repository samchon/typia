import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ClassClosure = (): void => _test_assert(CustomGuardError)(
    "ClassClosure",
)<ClassClosure>(
    ClassClosure
)((input) => typia.assert<ClassClosure>(input, (p) => new CustomGuardError(p)));
