import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ClassGetter = _test_assert(CustomGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.createAssert<ClassGetter>((p) => new CustomGuardError(p)));
