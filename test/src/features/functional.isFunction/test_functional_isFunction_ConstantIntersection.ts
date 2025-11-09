import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_isFunction_ConstantIntersection = (): void =>
  _test_functional_isFunction("ConstantIntersection")(ConstantIntersection)(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      typia.functional.isFunction(p),
  );
