import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_llm_applicationOfValidate_3_1_ClassPropertyAssignment =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ClassPropertyAssignment",
    factory: ClassPropertyAssignment,
  })(
    typia.llm.applicationOfValidate<
      ClassPropertyAssignmentApplication,
      "3.1"
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
