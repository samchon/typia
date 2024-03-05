import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateParameters_DynamicTag =
  _test_functional_validateParameters("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.validateParameters(p),
  );
