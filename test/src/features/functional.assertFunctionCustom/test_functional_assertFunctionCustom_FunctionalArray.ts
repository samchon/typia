import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertFunctionCustom_FunctionalArray = (): void =>
  _test_functional_assertFunction(CustomGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
