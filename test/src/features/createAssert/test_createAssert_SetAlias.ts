import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_createAssert_SetAlias = _test_assert(TypeGuardError)(
  "SetAlias",
)<SetAlias>(SetAlias)(typia.createAssert<SetAlias>());
