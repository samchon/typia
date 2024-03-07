import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagPattern =
  _test_functional_assertFunction(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
