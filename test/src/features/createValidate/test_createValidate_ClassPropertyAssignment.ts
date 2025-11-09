import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createValidate_ClassPropertyAssignment = (): void => _test_validate(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createValidate<ClassPropertyAssignment>());
