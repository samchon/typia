import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateEqualsReturn_ArrayUnion = (): void =>
  _test_functional_validateEqualsReturn("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.validateEqualsReturn(p),
  );
