import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_assertClone_DynamicEnumeration = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.misc.assertClone<DynamicEnumeration>(input),
  );
