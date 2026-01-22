import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertReturnAsyncCustom_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagAtomicUnion")(
      TypeTagAtomicUnion,
    )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
