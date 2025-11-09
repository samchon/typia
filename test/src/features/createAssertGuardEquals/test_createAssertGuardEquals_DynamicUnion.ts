import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertGuardEquals_DynamicUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.createAssertGuardEquals<DynamicUnion>());
