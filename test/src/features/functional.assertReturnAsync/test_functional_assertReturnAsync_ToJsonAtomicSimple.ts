import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertReturnAsync_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ToJsonAtomicSimple")(
      ToJsonAtomicSimple,
    )((p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertReturn(p),
    );
