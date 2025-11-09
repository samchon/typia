import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertParametersCustom_ClassMethod = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => ClassMethod) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
