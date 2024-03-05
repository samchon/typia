import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_validateFunction_ArrayRepeatedUnionWithTuple =
  _test_functional_validateFunction("ArrayRepeatedUnionWithTuple")(
    ArrayRepeatedUnionWithTuple,
  )((p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) =>
    typia.functional.validateFunction(p),
  );
