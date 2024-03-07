import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_validateReturnAsync_ClassPropertyAssignment =
  _test_functional_validateReturnAsync("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )((p: (input: ClassPropertyAssignment) => Promise<ClassPropertyAssignment>) =>
    typia.functional.validateReturn(p),
  );
