import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ConstantAtomicSimple =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ConstantAtomicSimple",
  )(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      typia.functional.assertEqualsParameters(p),
  );
