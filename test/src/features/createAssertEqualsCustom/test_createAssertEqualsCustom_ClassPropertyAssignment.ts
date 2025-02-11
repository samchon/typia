import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ClassPropertyAssignment = _test_assertEquals(CustomGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createAssertEquals<ClassPropertyAssignment>((p) => new CustomGuardError(p)));
