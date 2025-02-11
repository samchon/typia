import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapAlias } from "../../structures/MapAlias";

export const test_assertGuard_MapAlias = _test_assertGuard(TypeGuardError)(
  "MapAlias",
)<MapAlias>(MapAlias)((input) => typia.assertGuard<MapAlias>(input));
