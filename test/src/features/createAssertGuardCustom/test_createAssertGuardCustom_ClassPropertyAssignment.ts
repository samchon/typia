import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ClassPropertyAssignment = _test_assertGuard(CustomGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createAssertGuard<ClassPropertyAssignment>((p) => new CustomGuardError(p)));
