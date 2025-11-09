import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createAssertGuard_ArrayRepeatedOptional = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
    typia.createAssertGuard<ArrayRepeatedOptional>(),
  );
