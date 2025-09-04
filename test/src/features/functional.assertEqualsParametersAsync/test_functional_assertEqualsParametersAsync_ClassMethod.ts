import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsParametersAsync_ClassMethod =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("ClassMethod")(
      ClassMethod,
    )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
      typia.functional.assertEqualsParameters(p),
    );
