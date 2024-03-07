import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ConstantAtomicWrapper =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
