import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_createAssertParseCustom_ClassPropertyAssignment =
  _test_json_assertParse(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.json.createAssertParse<ClassPropertyAssignment>(
      (p) => new CustomGuardError(p),
    ),
  );
