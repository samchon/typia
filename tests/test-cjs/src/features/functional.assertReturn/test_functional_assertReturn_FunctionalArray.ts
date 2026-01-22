import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertReturn_FunctionalArray = (): void =>
  _test_functional_assertReturn(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => FunctionalArray) =>
    typia.functional.assertReturn(p),
  );
