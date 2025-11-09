import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_ClassPropertyAssignment = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ClassPropertyAssignment",
    factory: ClassPropertyAssignment
  })(
    typia.llm.application<ClassPropertyAssignmentApplication, "3.1", { equals: true }>(),
  );

interface ClassPropertyAssignmentApplication {
  insert(p: { first: ClassPropertyAssignment }): Promise<void>;
  reduce(p: { first: ClassPropertyAssignment, second: ClassPropertyAssignment | null }): Promise<ClassPropertyAssignment>;
  coalesce(p: {
    first: ClassPropertyAssignment | null,
    second: ClassPropertyAssignment | null,
    third?: ClassPropertyAssignment | null,
  }): Promise<ClassPropertyAssignment | null>;
}