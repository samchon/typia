import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateReturn_ConstantIntersection =
  _test_functional_validateReturn("ConstantIntersection")(ConstantIntersection)(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      typia.functional.validateReturn(p),
  );
