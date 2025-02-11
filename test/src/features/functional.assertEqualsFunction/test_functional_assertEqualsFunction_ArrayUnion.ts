import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsFunction_ArrayUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => ArrayUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
