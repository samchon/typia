import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertGuard_DynamicUnion = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicUnion")<DynamicUnion>(DynamicUnion)(
    typia.createAssertGuard<DynamicUnion>(),
  );
