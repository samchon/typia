import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayRepeatedUnionWithTuple = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)