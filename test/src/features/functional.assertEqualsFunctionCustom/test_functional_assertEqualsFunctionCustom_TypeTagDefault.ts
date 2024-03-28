import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsFunctionCustom_TypeTagDefault =
  _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
