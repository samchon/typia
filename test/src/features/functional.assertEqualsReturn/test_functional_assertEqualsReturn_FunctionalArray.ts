import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsReturn_FunctionalArray = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertEqualsReturn(p),
  );
