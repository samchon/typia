import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsParametersAsync_ClassGetter =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.assertEqualsParameters(p),
    );
