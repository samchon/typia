import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertReturn_DynamicUnion =
  _test_functional_assertReturn(TypeGuardError)("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.assertReturn(p),
  );
