import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateParametersAsync_ConstantIntersection =
  _test_functional_validateParametersAsync("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.validateParameters(p),
  );
