import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertEqualsReturnAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "TypeTagAtomicUnion",
    )(TypeTagAtomicUnion)(
      (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
        typia.functional.assertEqualsReturn(p),
    );
