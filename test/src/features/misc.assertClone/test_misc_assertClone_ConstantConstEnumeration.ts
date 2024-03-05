import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_assertClone_ConstantConstEnumeration =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.misc.assertClone<ConstantConstEnumeration>(input),
  );
