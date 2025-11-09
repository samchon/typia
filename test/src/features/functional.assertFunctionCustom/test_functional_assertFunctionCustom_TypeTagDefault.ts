import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertFunctionCustom_TypeTagDefault = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
