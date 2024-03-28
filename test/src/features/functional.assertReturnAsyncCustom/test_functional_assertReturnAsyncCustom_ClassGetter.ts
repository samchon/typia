import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertReturnAsyncCustom_ClassGetter =
  _test_functional_assertReturnAsync(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
