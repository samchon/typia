import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertReturn_ArrayUnion =
  _test_functional_assertReturn(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.assertReturn(p),
  );
