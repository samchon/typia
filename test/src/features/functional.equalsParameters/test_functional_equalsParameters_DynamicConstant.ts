import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_equalsParameters_DynamicConstant =
  _test_functional_equalsParameters("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.equalsParameters(p),
  );
