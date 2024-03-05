import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertReturnCustom_ClassMethod =
  _test_functional_assertReturn(CustomGuardError)("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
