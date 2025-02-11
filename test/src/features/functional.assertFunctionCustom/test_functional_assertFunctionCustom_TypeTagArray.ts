import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertFunctionCustom_TypeTagArray =
  _test_functional_assertFunction(CustomGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
