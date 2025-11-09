import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertFunctionCustom_TypeTagCustom = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
