import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsFunction_DynamicUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
