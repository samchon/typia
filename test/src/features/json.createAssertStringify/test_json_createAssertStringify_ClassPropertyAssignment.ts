import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_createAssertStringify_ClassPropertyAssignment =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)(
      typia.json.createAssertStringify<ClassPropertyAssignment>(),
    );
