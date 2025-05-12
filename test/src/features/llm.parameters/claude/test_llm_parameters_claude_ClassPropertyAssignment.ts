import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_parameters_claude_ClassPropertyAssignment =
  _test_llm_parameters({
    model: "claude",
    name: "ClassPropertyAssignment",
  })(typia.llm.parameters<ClassPropertyAssignmentParameters, "claude">());

interface ClassPropertyAssignmentParameters {
  regular: ClassPropertyAssignment;
  nullable: ClassPropertyAssignment | null;
  optional: ClassPropertyAssignment | undefined;
  faint: ClassPropertyAssignment | null | undefined;
  array: Array<ClassPropertyAssignment>;
}
