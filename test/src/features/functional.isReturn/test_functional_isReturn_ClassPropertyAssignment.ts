import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_isReturn_ClassPropertyAssignment = (): void =>
  _test_functional_isReturn("ClassPropertyAssignment")(ClassPropertyAssignment)(
    (p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
      typia.functional.isReturn(p),
  );
