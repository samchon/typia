import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsParametersCustom_ConstantConstEnumeration =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
