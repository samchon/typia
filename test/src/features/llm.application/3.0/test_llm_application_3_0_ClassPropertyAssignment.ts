import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_application_3_0_ClassPropertyAssignment =
  _test_llm_application({
    model: "3.0",
    name: "ClassPropertyAssignment",
  })(typia.llm.application<ClassPropertyAssignmentApplication, "3.0">());

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
