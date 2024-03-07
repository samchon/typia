import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_FunctionalArray =
  _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertFunction(p),
  );
