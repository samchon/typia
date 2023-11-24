import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_createIsParse_ClassPropertyAssignment =
  _test_json_isParse("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.json.createIsParse<ClassPropertyAssignment>());
