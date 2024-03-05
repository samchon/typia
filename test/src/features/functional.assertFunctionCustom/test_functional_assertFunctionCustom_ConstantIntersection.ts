import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertFunctionCustom_ConstantIntersection =
  _test_functional_assertFunction(CustomGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
