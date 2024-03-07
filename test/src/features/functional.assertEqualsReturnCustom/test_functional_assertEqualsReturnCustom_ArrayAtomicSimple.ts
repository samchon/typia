import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ArrayAtomicSimple =
  _test_functional_assertEqualsReturn(CustomGuardError)("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
