import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertFunctionCustom_TypeTagRange =
  _test_functional_assertFunction(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
