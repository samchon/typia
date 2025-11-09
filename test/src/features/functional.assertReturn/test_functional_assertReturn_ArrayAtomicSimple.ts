import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertReturn_ArrayAtomicSimple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
    typia.functional.assertReturn(p),
  );
