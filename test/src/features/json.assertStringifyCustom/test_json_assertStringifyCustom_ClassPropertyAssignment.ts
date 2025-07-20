import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_assertStringifyCustom_ClassPropertyAssignment =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
      typia.json.assertStringify<ClassPropertyAssignment>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
