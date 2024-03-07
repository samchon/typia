import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_validateParametersAsync_ArrayRepeatedUnionWithTuple =
  _test_functional_validateParametersAsync("ArrayRepeatedUnionWithTuple")(
    ArrayRepeatedUnionWithTuple,
  )(
    (
      p: (
        input: ArrayRepeatedUnionWithTuple,
      ) => Promise<ArrayRepeatedUnionWithTuple>,
    ) => typia.functional.validateParameters(p),
  );
