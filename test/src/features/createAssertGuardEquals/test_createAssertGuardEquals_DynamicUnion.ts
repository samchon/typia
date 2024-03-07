import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_DynamicUnion =
  _test_assertGuardEquals(TypeGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.createAssertGuardEquals<DynamicUnion>());
