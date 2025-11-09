import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_assertCloneCustom_ConstantEnumeration = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.misc.assertClone<ConstantEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
