import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertEqualsParameters_ConstantAtomicSimple =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ConstantAtomicSimple",
  )(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
      typia.functional.assertEqualsParameters(p),
  );
