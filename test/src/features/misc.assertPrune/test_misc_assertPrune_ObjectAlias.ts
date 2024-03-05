import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_assertPrune_ObjectAlias = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
  typia.misc.assertPrune<ObjectAlias>(input),
);
