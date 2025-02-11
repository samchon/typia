import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertFunctionAsync_TypeTagAtomicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
    typia.functional.assertFunction(p),
  );
