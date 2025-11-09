import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssertGuardCustom_ObjectHttpAtomic = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.createAssertGuard<ObjectHttpAtomic>((p) => new CustomGuardError(p)));
