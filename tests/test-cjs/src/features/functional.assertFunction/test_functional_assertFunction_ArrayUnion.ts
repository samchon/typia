import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertFunction_ArrayUnion = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertFunction(p),
  );
