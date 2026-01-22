import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

export const test_createAssertCustom_SetAlias = (): void =>
  _test_assert(CustomGuardError)("SetAlias")<SetAlias>(SetAlias)(
    typia.createAssert<SetAlias>((p) => new CustomGuardError(p)),
  );
