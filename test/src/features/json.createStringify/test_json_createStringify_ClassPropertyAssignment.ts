import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_createStringify_ClassPropertyAssignment = (): void =>
  _test_json_stringify("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.json.createStringify<ClassPropertyAssignment>());
