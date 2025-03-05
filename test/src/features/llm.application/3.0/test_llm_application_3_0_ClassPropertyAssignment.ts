import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_application_3_0_ClassPropertyAssignment =
  _test_llm_application({
    model: "3.0",
    name: "ClassPropertyAssignment",
    factory: ClassPropertyAssignment,
  })(typia.llm.application<ClassPropertyAssignmentApplication, "3.0">());

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
