import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ClassMethod =
  _test_functional_assertReturn(TypeGuardError)("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.assertReturn(p),
  );
