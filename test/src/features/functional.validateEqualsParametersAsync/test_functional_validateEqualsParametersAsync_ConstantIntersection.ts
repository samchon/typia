import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateEqualsParametersAsync_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.validateEqualsParameters(p),
    );
