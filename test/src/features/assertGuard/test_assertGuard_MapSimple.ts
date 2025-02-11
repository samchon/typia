import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_assertGuard_MapSimple = _test_assertGuard(TypeGuardError)(
    "MapSimple",
)<MapSimple>(
    MapSimple
)((input) => typia.assertGuard<MapSimple>(input));
