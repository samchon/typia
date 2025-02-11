import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsReturnAsyncCustom_ClassMethod =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
