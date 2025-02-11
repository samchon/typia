import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ClassPropertyAssignment = _test_assertEquals(TypeGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createAssertEquals<ClassPropertyAssignment>());
