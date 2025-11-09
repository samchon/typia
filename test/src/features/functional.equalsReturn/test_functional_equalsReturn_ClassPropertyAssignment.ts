import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_equalsReturn_ClassPropertyAssignment = (): void =>
  _test_functional_equalsReturn("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )((p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
    typia.functional.equalsReturn(p),
  );
