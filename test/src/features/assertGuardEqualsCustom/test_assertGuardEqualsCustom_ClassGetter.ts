import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ClassGetter = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.assertGuardEquals<ClassGetter>(input, (p) => new CustomGuardError(p)));
