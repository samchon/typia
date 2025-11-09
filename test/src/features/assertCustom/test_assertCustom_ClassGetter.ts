import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ClassGetter = (): void => _test_assert(CustomGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.assert<ClassGetter>(input, (p) => new CustomGuardError(p)));
