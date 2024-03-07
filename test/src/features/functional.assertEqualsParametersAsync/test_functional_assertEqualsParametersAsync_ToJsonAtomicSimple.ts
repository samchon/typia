import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ToJsonAtomicSimple =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ToJsonAtomicSimple",
  )(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertEqualsParameters(p),
  );
