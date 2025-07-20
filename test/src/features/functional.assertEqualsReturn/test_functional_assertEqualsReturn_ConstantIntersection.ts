import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsReturn_ConstantIntersection =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => ConstantIntersection) =>
      typia.functional.assertEqualsReturn(p),
    );
