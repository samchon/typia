import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertFunction_DynamicUnion =
  _test_functional_assertFunction(TypeGuardError)("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.assertFunction(p),
  );
