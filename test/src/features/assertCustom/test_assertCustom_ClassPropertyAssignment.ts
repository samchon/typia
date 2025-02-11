import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ClassPropertyAssignment = _test_assert(CustomGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)((input) => typia.assert<ClassPropertyAssignment>(input, (p) => new CustomGuardError(p)));
