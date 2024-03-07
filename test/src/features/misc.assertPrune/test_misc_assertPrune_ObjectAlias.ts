import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectAlias = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
  typia.misc.assertPrune<ObjectAlias>(input),
);
