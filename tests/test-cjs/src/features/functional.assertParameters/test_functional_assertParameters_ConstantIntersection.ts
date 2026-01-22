import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertParameters_ConstantIntersection = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.assertParameters(p),
  );
