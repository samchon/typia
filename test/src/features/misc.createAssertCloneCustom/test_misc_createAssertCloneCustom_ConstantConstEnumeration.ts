import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createAssertCloneCustom_ConstantConstEnumeration =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.misc.createAssertClone<ConstantConstEnumeration>(
      (p) => new CustomGuardError(p),
    ),
  );
