import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertFunction_FunctionalArray =
  _test_functional_assertFunction(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertFunction(p),
  );
