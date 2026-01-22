import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateFunctionAsync_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.validateFunction(p),
    );
