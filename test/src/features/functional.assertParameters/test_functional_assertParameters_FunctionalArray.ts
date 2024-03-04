import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertParameters_FunctionalArray =
  _test_functional_assertParameters(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertParameters(p),
  );
