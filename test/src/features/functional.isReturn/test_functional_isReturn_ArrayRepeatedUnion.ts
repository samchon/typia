import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_isReturn_ArrayRepeatedUnion = (): void =>
  _test_functional_isReturn("ArrayRepeatedUnion")(ArrayRepeatedUnion)(
    (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
      typia.functional.isReturn(p),
  );
