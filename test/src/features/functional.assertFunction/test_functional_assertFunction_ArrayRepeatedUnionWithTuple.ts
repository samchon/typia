import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertFunction_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_functional_assertFunction(TypeGuardError)(
      "ArrayRepeatedUnionWithTuple",
    )(ArrayRepeatedUnionWithTuple)(
      (
        p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple,
      ) => typia.functional.assertFunction(p),
    );
