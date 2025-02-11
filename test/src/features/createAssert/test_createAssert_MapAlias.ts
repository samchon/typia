import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

export const test_createAssert_MapAlias = _test_assert(TypeGuardError)(
  "MapAlias",
)<MapAlias>(MapAlias)(typia.createAssert<MapAlias>());
