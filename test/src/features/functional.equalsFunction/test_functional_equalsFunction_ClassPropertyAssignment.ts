import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_equalsFunction_ClassPropertyAssignment = _test_functional_equalsFunction(
  "ClassPropertyAssignment"
)(ClassPropertyAssignment)(
  (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) => typia.functional.equalsFunction(p),
)