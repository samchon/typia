import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_FunctionalObjectUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.assertFunction(p),
  );
