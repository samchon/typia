import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertGuardCustom_ObjectHttpArray = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.createAssertGuard<ObjectHttpArray>((p) => new CustomGuardError(p)));
