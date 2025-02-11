import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertFunction_ConstantIntersection =
  _test_functional_assertFunction(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.assertFunction(p),
  );
