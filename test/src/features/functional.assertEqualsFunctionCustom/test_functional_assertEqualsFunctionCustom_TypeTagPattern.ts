import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsFunctionCustom_TypeTagPattern =
  _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
