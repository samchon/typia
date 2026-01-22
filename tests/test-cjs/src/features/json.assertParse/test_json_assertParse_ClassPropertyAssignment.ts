import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_assertParse_ClassPropertyAssignment = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.json.assertParse<ClassPropertyAssignment>(input),
  );
