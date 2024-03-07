import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ToJsonAtomicSimple =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ToJsonAtomicSimple",
  )(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertEqualsFunction(p),
  );
