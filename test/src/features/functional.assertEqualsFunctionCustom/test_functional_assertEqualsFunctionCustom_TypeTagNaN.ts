import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsFunctionCustom_TypeTagNaN =
  _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => TypeTagNaN) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
