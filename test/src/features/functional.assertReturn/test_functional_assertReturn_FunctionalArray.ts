import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_FunctionalArray = (): void => _test_functional_assertReturn(TypeGuardError)(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.assertReturn(p),
)