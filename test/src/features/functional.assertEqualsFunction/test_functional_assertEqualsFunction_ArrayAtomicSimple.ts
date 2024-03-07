import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ArrayAtomicSimple =
  _test_functional_assertEqualsFunction(TypeGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
    typia.functional.assertEqualsFunction(p),
  );
