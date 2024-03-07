import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ClassMethod =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
