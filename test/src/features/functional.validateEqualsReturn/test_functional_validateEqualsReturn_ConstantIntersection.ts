import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateEqualsReturn_ConstantIntersection =
  _test_functional_validateEqualsReturn("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.validateEqualsReturn(p),
  );
