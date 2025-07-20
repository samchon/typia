import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsReturn_ArrayUnion = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertEqualsReturn(p),
  );
