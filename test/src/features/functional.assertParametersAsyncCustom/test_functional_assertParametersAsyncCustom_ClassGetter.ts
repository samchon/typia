import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertParametersAsyncCustom_ClassGetter =
  _test_functional_assertParametersAsync(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
