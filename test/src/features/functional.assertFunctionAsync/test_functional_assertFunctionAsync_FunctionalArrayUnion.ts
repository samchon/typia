import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_FunctionalArrayUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalArrayUnion")(
    FunctionalArrayUnion,
  )((p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
    typia.functional.assertFunction(p),
  );
