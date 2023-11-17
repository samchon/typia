import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_json_isParse_ClassPropertyAssignment = _test_json_isParse(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
  typia.json.isParse<ClassPropertyAssignment>(input),
);
