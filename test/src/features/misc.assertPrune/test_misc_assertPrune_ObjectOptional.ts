import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectOptional = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectOptional")<ObjectOptional>(ObjectOptional)((input) =>
  typia.misc.assertPrune<ObjectOptional>(input),
);
