import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_createAssertPrune_ObjectHttpNullable = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    typia.misc.createAssertPrune<ObjectHttpNullable>(),
  );
