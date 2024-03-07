import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ArrayAtomicAlias =
  _test_functional_assertEqualsReturn(CustomGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
