import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsReturnAsyncCustom_ClassGetter =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
