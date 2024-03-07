import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ArrayAtomicAlias =
  _test_functional_assertEqualsReturn(TypeGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
    typia.functional.assertEqualsReturn(p),
  );
