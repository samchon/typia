import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_llm_application_ClassPropertyAssignment = (): void =>
  _test_llm_application({
    name: "ClassPropertyAssignment",
    factory: ClassPropertyAssignment,
  })(typia.llm.application<ClassPropertyAssignmentApplication>());

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
