import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsParameters_FunctionalArray =
  _test_functional_assertEqualsParameters(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertEqualsParameters(p),
  );
