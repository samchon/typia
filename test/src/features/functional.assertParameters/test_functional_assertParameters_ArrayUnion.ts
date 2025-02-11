import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertParameters_ArrayUnion =
  _test_functional_assertParameters(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertParameters(p),
  );
