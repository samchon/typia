import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_validateFunction_DynamicNever =
  _test_functional_validateFunction("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => DynamicNever) =>
      typia.functional.validateFunction(p),
  );
