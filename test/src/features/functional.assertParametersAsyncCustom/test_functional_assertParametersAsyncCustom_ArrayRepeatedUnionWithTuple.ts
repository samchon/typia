import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedUnionWithTuple =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )(ArrayRepeatedUnionWithTuple)(
    (
      p: (
        input: ArrayRepeatedUnionWithTuple,
      ) => Promise<ArrayRepeatedUnionWithTuple>,
    ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
