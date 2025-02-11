import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsFunction_FunctionalArray =
  _test_functional_assertEqualsFunction(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertEqualsFunction(p),
  );
