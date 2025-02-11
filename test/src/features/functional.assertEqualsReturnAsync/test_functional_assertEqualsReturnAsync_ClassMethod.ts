import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsReturnAsync_ClassMethod =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertEqualsReturn(p),
  );
