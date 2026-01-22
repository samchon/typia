import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertReturnCustom_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )(ArrayRepeatedUnionWithTuple)(
      (
        p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
