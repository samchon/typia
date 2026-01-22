import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsParameters_ConstantIntersection =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ConstantIntersection",
    )(ConstantIntersection)(
      (p: (input: ConstantIntersection) => ConstantIntersection) =>
        typia.functional.assertEqualsParameters(p),
    );
