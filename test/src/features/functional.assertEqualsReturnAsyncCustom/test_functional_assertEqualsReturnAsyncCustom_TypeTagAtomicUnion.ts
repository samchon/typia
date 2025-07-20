import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "TypeTagAtomicUnion",
    )(TypeTagAtomicUnion)(
      (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
