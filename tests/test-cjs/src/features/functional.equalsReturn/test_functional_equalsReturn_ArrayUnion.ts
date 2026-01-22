import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_equalsReturn_ArrayUnion = (): void =>
  _test_functional_equalsReturn("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.equalsReturn(p),
  );
