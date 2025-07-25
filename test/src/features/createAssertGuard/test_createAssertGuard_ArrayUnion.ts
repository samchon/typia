import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertGuard_ArrayUnion = (): void =>
  _test_assertGuard(TypeGuardError)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.createAssertGuard<ArrayUnion>(),
  );
