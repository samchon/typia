import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateParameters_ConstantIntersection =
  (): void =>
    _test_functional_validateParameters("ConstantIntersection")(
      ConstantIntersection,
    )((p: (input: ConstantIntersection) => ConstantIntersection) =>
      typia.functional.validateParameters(p),
    );
