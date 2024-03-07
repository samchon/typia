import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ArrayAtomicSimple =
  _test_functional_assertEqualsFunction(CustomGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
