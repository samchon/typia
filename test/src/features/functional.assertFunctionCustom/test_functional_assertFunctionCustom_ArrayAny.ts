import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertFunctionCustom_ArrayAny =
  _test_functional_assertFunction(CustomGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
