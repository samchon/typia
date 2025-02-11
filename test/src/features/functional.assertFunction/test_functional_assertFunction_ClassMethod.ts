import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertFunction_ClassMethod =
  _test_functional_assertFunction(TypeGuardError)("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.assertFunction(p),
  );
