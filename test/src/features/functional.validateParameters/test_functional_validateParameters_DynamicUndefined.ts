import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_validateParameters_DynamicUndefined =
  _test_functional_validateParameters("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      typia.functional.validateParameters(p),
  );
