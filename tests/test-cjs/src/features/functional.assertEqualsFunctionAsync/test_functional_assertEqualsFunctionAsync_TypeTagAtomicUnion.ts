import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertEqualsFunctionAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "TypeTagAtomicUnion",
    )(TypeTagAtomicUnion)(
      (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );
