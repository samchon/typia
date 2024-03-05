import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_equalsParameters_DynamicTag =
  _test_functional_equalsParameters("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.equalsParameters(p),
  );
