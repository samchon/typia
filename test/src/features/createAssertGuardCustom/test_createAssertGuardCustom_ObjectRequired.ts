import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertGuardCustom_ObjectRequired = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.createAssertGuard<ObjectRequired>((p) => new CustomGuardError(p)));
