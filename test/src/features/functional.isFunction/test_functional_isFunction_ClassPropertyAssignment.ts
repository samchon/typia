import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_isFunction_ClassPropertyAssignment =
  _test_functional_isFunction("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )((p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
    typia.functional.isFunction(p),
  );
