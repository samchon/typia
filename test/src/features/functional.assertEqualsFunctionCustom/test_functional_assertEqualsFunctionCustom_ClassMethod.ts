import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsFunctionCustom_ClassMethod =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("ClassMethod")(
      ClassMethod,
    )((p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
