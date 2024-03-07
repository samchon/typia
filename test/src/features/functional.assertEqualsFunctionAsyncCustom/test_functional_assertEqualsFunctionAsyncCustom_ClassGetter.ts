import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ClassGetter =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
