import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

export const test_createAssert_SetAlias = (): void =>
  _test_assert(TypeGuardError)("SetAlias")<SetAlias>(SetAlias)(
    typia.createAssert<SetAlias>(),
  );
