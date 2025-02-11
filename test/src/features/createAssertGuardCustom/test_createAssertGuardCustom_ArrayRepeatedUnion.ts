import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_createAssertGuardCustom_ArrayRepeatedUnion =
  _test_assertGuard(CustomGuardError)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )(
    typia.createAssertGuard<ArrayRepeatedUnion>((p) => new CustomGuardError(p)),
  );
