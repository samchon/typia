import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createIsPrune_ClassPropertyAssignment = (): void => _test_misc_isPrune(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.misc.createIsPrune<ClassPropertyAssignment>());
