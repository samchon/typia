import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateFunction_ConstantIntersection = (): void =>
  _test_functional_validateFunction("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.validateFunction(p),
  );
