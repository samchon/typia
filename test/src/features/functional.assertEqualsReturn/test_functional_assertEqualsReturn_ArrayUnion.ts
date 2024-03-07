import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ArrayUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertEqualsReturn(p),
  );
