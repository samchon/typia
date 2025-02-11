import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertReturnAsyncCustom_ClassMethod =
  _test_functional_assertReturnAsync(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
