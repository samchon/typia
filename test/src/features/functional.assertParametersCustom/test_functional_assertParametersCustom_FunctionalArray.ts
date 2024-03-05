import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertParametersCustom_FunctionalArray =
  _test_functional_assertParameters(CustomGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
