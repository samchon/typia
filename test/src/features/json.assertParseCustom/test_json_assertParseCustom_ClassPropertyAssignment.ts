import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ClassPropertyAssignment =
  _test_json_assertParse(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.json.assertParse<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
