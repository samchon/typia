import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsFunctionAsyncCustom_ClassGetter =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
