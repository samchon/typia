import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsFunctionCustom_ConstantIntersection =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
