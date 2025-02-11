import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertFunction_DynamicNever =
  _test_functional_assertFunction(TypeGuardError)("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => DynamicNever) =>
      typia.functional.assertFunction(p),
  );
