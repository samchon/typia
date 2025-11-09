import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertGuardCustom_ObjectHttpNullable = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(
    typia.createAssertGuard<ObjectHttpNullable>((p) => new CustomGuardError(p)),
  );
