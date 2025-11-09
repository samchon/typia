import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

import { TypeGuardError } from "typia";

export const test_assert_MapAlias = (): void => _test_assert(TypeGuardError)(
    "MapAlias",
)<MapAlias>(
    MapAlias
)((input) => typia.assert<MapAlias>(input));
