import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsFunction_ConstantIntersection =
  _test_functional_assertEqualsFunction(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.assertEqualsFunction(p),
  );
