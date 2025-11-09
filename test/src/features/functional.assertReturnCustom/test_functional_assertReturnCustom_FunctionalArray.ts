import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_FunctionalArray = (): void => _test_functional_assertReturn(CustomGuardError)(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => FunctionalArray) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)