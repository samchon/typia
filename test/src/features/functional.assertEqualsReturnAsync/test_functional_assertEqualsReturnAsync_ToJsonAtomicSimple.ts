import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ToJsonAtomicSimple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ToJsonAtomicSimple",
  )(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertEqualsReturn(p),
  );
