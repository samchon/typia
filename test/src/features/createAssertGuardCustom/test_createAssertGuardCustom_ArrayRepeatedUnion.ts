import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayRepeatedUnion =
  _test_assertGuard(CustomGuardError)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )(
    typia.createAssertGuard<ArrayRepeatedUnion>((p) => new CustomGuardError(p)),
  );
