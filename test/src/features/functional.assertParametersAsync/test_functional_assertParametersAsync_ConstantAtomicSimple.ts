import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ConstantAtomicSimple =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ConstantAtomicSimple",
  )(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      typia.functional.assertParameters(p),
  );
