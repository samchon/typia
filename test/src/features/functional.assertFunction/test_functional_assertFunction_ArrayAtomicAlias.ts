import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertFunction_ArrayAtomicAlias =
  _test_functional_assertFunction(TypeGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
    typia.functional.assertFunction(p),
  );
