import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_equalsFunctionAsync_ConstantIntersection =
  _test_functional_equalsFunctionAsync("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.equalsFunction(p),
  );
