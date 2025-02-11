import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertEqualsFunction_ArrayAtomicAlias =
  _test_functional_assertEqualsFunction(TypeGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
    typia.functional.assertEqualsFunction(p),
  );
