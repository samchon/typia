import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertGuardEqualsCustom_ArrayUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )(typia.createAssertGuardEquals<ArrayUnion>((p) => new CustomGuardError(p)));
