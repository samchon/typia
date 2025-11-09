import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_assertFunction_ArrayRepeatedUnion = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArrayRepeatedUnion")(
    ArrayRepeatedUnion,
  )((p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
    typia.functional.assertFunction(p),
  );
