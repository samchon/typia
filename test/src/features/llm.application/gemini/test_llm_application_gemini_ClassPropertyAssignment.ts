import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_application_gemini_ClassPropertyAssignment =
  _test_llm_application({
    model: "gemini",
    name: "ClassPropertyAssignment",
  })(typia.llm.application<ClassPropertyAssignmentApplication, "gemini">());

interface ClassPropertyAssignmentApplication {
  insert(p: { first: ClassPropertyAssignment }): Promise<void>;
  reduce(p: {
    first: ClassPropertyAssignment;
    second: ClassPropertyAssignment | null;
  }): Promise<ClassPropertyAssignment>;
  coalesce(p: {
    first: ClassPropertyAssignment | null;
    second: ClassPropertyAssignment | null;
    third?: ClassPropertyAssignment | null;
  }): Promise<ClassPropertyAssignment | null>;
}
