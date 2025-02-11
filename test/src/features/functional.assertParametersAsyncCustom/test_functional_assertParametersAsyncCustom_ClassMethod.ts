import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertParametersAsyncCustom_ClassMethod =
  _test_functional_assertParametersAsync(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
