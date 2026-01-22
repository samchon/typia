import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertParametersAsync_ArrayRepeatedUnionWithTuple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )(ArrayRepeatedUnionWithTuple)(
      (
        p: (
          input: ArrayRepeatedUnionWithTuple,
        ) => Promise<ArrayRepeatedUnionWithTuple>,
      ) => typia.functional.assertParameters(p),
    );
