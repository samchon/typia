import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ClassGetter = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.createAssertGuardEquals<ClassGetter>((p) => new CustomGuardError(p)));
