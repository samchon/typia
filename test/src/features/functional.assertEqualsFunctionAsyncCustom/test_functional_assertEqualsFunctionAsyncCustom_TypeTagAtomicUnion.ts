import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagAtomicUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TypeTagAtomicUnion",
  )(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
