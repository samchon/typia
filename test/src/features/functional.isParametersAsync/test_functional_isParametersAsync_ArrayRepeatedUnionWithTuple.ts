import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_isParametersAsync_ArrayRepeatedUnionWithTuple =
  _test_functional_isParametersAsync("ArrayRepeatedUnionWithTuple")(
    ArrayRepeatedUnionWithTuple,
  )(
    (
      p: (
        input: ArrayRepeatedUnionWithTuple,
      ) => Promise<ArrayRepeatedUnionWithTuple>,
    ) => typia.functional.isParameters(p),
  );
