import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertFunction_ArrayAtomicSimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
    typia.functional.assertFunction(p),
  );
