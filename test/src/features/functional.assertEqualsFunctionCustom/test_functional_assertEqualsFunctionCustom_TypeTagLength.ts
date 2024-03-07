import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagLength =
  _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
