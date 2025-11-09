import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ArrayRepeatedOptional = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ArrayRepeatedOptional"
)(ArrayRepeatedOptional)(
  (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)