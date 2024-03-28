import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsReturn_DynamicUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
