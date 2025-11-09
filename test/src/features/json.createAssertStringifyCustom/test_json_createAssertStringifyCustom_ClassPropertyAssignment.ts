import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ClassPropertyAssignment = (): void => _test_json_assertStringify(CustomGuardError)(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.json.createAssertStringify<ClassPropertyAssignment>((p) => new CustomGuardError(p)));
