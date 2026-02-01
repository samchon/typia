import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapAlias } from "../../structures/MapAlias";

export const test_createIs_MapAlias = (): void => _test_is(
    "MapAlias",
)<MapAlias>(
    MapAlias
)(typia.createIs<MapAlias>());
