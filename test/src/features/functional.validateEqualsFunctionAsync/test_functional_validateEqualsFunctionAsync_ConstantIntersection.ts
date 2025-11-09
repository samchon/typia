import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateEqualsFunctionAsync_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.validateEqualsFunction(p),
    );
