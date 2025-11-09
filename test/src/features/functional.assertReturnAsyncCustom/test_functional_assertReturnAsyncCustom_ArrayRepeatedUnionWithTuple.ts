import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertReturnAsyncCustom_ArrayRepeatedUnionWithTuple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )(ArrayRepeatedUnionWithTuple)(
      (
        p: (
          input: ArrayRepeatedUnionWithTuple,
        ) => Promise<ArrayRepeatedUnionWithTuple>,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
