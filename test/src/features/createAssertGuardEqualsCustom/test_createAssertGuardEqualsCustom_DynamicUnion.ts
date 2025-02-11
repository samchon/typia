import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertGuardEqualsCustom_DynamicUnion =
  _test_assertGuardEquals(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(
    typia.createAssertGuardEquals<DynamicUnion>((p) => new CustomGuardError(p)),
  );
