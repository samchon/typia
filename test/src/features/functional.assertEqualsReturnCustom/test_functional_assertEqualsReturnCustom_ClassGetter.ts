import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsReturnCustom_ClassGetter =
  _test_functional_assertEqualsReturn(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => ClassGetter) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
