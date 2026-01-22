import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertFunctionAsyncCustom_ClassGetter =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
