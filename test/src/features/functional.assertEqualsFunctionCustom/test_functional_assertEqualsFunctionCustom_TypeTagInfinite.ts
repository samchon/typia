import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsFunctionCustom_TypeTagInfinite =
  _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
