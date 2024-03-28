import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertReturn_ArrayRepeatedUnionWithTuple =
  _test_functional_assertReturn(TypeGuardError)("ArrayRepeatedUnionWithTuple")(
    ArrayRepeatedUnionWithTuple,
  )((p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) =>
    typia.functional.assertReturn(p),
  );
