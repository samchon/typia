import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapUnion } from "../../structures/MapUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_MapUnion = (): void => _test_assertGuard(TypeGuardError)(
    "MapUnion",
)<MapUnion>(
    MapUnion
)((input) => typia.assertGuard<MapUnion>(input));
