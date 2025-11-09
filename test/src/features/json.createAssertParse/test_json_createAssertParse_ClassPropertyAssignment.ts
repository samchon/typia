import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ClassPropertyAssignment = (): void => _test_json_assertParse(TypeGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.json.createAssertParse<ClassPropertyAssignment>());
