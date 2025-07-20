import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createAssertPrune_ObjectOptional = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(typia.misc.createAssertPrune<ObjectOptional>());
