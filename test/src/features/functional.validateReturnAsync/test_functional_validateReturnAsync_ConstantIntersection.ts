import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateReturnAsync_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.validateReturn(p),
    );
