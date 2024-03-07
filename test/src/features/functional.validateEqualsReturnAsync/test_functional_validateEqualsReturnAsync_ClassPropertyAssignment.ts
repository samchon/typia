import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_validateEqualsReturnAsync_ClassPropertyAssignment =
  _test_functional_validateEqualsReturnAsync("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )((p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
    typia.functional.validateEqualsReturn(p),
  );
