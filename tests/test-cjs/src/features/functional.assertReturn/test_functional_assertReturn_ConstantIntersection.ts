import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertReturn_ConstantIntersection = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.assertReturn(p),
  );
