import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertParameters_ArrayAtomicSimple =
  _test_functional_assertParameters(TypeGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
    typia.functional.assertParameters(p),
  );
