import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertGuardEquals_ArrayUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.createAssertGuardEquals<ArrayUnion>(),
  );
