import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_standardSchema_createValidate_ClassPropertyAssignment = _test_standardSchema_validate(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createValidate<ClassPropertyAssignment>());
