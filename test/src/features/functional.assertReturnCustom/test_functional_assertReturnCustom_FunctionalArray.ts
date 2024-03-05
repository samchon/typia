import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertReturnCustom_FunctionalArray =
  _test_functional_assertReturn(CustomGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
