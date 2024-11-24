import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_application_claude_ClassPropertyAssignment =
  _test_llm_application({
    model: "claude",
    name: "ClassPropertyAssignment",
  })(typia.llm.application<ClassPropertyAssignmentApplication, "claude">());

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
