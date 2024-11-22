import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_json_application_v3_1_ClassPropertyAssignment =
  _test_json_application({
    version: "3.1",
    name: "ClassPropertyAssignment",
  })(typia.json.application<ClassPropertyAssignmentApplication, "3.1">());

interface ClassPropertyAssignmentApplication {
  insert(first: ClassPropertyAssignment): Promise<void>;
  reduce(
    first: ClassPropertyAssignment,
    second: ClassPropertyAssignment | null,
  ): Promise<ClassPropertyAssignment>;
  coalesce(
    first: ClassPropertyAssignment | null,
    second: ClassPropertyAssignment | null,
    third?: ClassPropertyAssignment | null,
  ): Promise<ClassPropertyAssignment | null>;
}
