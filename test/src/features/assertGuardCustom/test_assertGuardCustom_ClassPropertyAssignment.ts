import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ClassPropertyAssignment = (): void => _test_assertGuard(CustomGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)((input) => typia.assertGuard<ClassPropertyAssignment>(input, (p) => new CustomGuardError(p)));
