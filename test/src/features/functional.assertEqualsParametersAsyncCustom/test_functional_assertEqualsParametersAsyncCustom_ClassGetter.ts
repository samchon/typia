import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsParametersAsyncCustom_ClassGetter =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
