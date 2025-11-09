import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertFunctionAsync_ClassGetter =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.assertFunction(p),
    );
