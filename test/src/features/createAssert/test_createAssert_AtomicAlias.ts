import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssert_AtomicAlias = _test_assert(TypeGuardError)(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.createAssert<AtomicAlias>());
