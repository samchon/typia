import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

export const test_createAssertGuard_MapAlias = _test_assertGuard(
  "MapAlias",
)<MapAlias>(MapAlias)(typia.createAssertGuard<MapAlias>());
