import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateParameters_DynamicConstant =
  _test_functional_validateParameters("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.validateParameters(p),
  );
