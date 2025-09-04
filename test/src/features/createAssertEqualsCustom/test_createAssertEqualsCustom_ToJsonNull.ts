import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertEqualsCustom_ToJsonNull = (): void =>
  _test_assertEquals(CustomGuardError)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    typia.createAssertEquals<ToJsonNull>((p) => new CustomGuardError(p)),
  );
