import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsReturnAsync_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ToJsonAtomicSimple",
    )(ToJsonAtomicSimple)(
      (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
        typia.functional.assertEqualsReturn(p),
    );
