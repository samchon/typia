import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_assertParseCustom_ClassPropertyAssignment = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.json.assertParse<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
