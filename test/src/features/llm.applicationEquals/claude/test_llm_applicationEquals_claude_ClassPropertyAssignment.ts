import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_applicationEquals_claude_ClassPropertyAssignment =
  (): void =>
    _test_llm_applicationEquals({
      model: "claude",
      name: "ClassPropertyAssignment",
      factory: ClassPropertyAssignment,
    })(
      typia.llm.application<
        ClassPropertyAssignmentApplication,
        "claude",
        { equals: true }
      >(),
    );

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
