import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ClassPropertyAssignment = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.misc.createAssertPrune<ClassPropertyAssignment>());
