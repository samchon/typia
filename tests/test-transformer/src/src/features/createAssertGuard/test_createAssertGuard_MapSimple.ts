import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_MapSimple = (): void => _test_assertGuard(TypeGuardError)(
    "MapSimple",
)<MapSimple>(
    MapSimple
)(typia.createAssertGuard<MapSimple>());
