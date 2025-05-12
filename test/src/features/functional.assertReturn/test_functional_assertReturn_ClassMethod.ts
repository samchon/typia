import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertReturn_ClassMethod =
  _test_functional_assertReturn(TypeGuardError)("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.assertReturn(p),
  );
