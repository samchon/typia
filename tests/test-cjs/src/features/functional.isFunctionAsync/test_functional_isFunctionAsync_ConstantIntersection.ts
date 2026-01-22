import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_isFunctionAsync_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.isFunction(p),
    );
