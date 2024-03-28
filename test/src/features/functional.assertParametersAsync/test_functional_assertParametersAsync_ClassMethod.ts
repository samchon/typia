import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertParametersAsync_ClassMethod =
  _test_functional_assertParametersAsync(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.assertParameters(p),
  );
