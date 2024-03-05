import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateEqualsParameters_ConstantIntersection =
  _test_functional_validateEqualsParameters("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => ConstantIntersection) =>
    typia.functional.validateEqualsParameters(p),
  );
