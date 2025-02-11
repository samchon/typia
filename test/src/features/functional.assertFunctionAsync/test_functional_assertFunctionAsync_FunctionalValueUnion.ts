import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertFunctionAsync_FunctionalValueUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.assertFunction(p),
  );
