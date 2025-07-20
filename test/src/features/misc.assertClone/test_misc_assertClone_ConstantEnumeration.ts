import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_assertClone_ConstantEnumeration = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ConstantEnumeration",
  )<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.misc.assertClone<ConstantEnumeration>(input),
  );
