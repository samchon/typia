import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_llm_parameters_ClassPropertyAssignment = (): void =>
  _test_llm_parameters("ClassPropertyAssignment")(
    typia.llm.parameters<ClassPropertyAssignmentParameters>(),
  );

interface ClassPropertyAssignmentParameters {
  regular: ClassPropertyAssignment;
  nullable: ClassPropertyAssignment | null;
  optional: ClassPropertyAssignment | undefined;
  faint: ClassPropertyAssignment | null | undefined;
  array: Array<ClassPropertyAssignment>;
}
