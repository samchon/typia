import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsReturnCustom_ClassMethod = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => ClassMethod) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
