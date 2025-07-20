import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertGuardCustom_ArraySimple = (): void =>
  _test_assertGuard(CustomGuardError)("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.createAssertGuard<ArraySimple>((p) => new CustomGuardError(p)),
  );
