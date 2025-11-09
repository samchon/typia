import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createValidateEquals_ClassPropertyAssignment = (): void => _test_validateEquals(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createValidateEquals<ClassPropertyAssignment>());
