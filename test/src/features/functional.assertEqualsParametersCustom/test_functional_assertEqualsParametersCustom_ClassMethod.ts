import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsParametersCustom_ClassMethod =
  _test_functional_assertEqualsParameters(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => ClassMethod) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
