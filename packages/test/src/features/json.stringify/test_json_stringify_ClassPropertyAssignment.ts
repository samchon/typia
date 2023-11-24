import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_stringify_ClassPropertyAssignment = _test_json_stringify(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  typia.json.stringify<ClassPropertyAssignment>(input),
);
