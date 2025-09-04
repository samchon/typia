import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_isParse_ClassPropertyAssignment = (): void =>
  _test_json_isParse("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input) => typia.json.isParse<ClassPropertyAssignment>(input));
